import axios from 'axios';
import EpisodeData from '../entity/EpisodeData';

function FetchVoteEpisode(episode: number, index: number) {
    return axios.get(process.env.REACT_APP_SERVER_URL + `/api/search/episode?episode=${episode}&index=${index}`)
        .then(res => res.data.result)
        .catch(err => {
            if(err.response.status === 404) {
                return {
                    isNotFound: false,
                }
            }
        });
}

export default function FetchVoteEpisodes(episodeVoteData: EpisodeData[], callback: (fetchedData: EpisodeData[]) => void) {
    const willFetchData = [...episodeVoteData]
    Promise.all(willFetchData.map(d => FetchVoteEpisode(d.episode, d.index)))
        .then(values => {
            values.forEach((value: any, index: number) => {
                if(value.isNotFound === false) {
                    willFetchData[index].error = "존재하지 않는 투고 정보입니다.";
                } else {
                    if(value.votable) {
                    willFetchData[index].song = value.song;
                    willFetchData[index].producer = value.producer;
                    } else {
                        willFetchData[index].error = "투표 대상이 아닙니다.";
                    }
                }
            })

            callback(willFetchData);
        });
}