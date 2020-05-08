import axios from 'axios';
import EpisodeData from '../entity/EpisodeData';
import VoteData from '../entity/VoteData';

function FetchVoteEpisode(episode: number, index: number) {
    return axios.get(process.env.REACT_APP_SERVER_URL + `/search/episode?episode=${episode}&index=${index}`)
        .then(res => res.data.result)
        .catch(err => {
            if(err.response.status === 404) {
                return {
                    isNotFound: false,
                }
            }
        });
}



function CheckOverlappedProducer(voteData: VoteData, producer: string): boolean {
    let isOverlapped = false;
    let cnt = 1;
    const checkEpisodeList = ['pitch', 'voice', 'funny', 'content', 'original'];

    checkEpisodeList.forEach(key => {
        (voteData[key] as EpisodeData[]).forEach(episodeData => {
            if(!!producer && !!episodeData.producer && episodeData.producer === producer) {
                cnt--;
            }
        })
    })

    if(cnt < 0) isOverlapped = true;

    return isOverlapped;
}

export default function FetchVoteEpisodes(
    episodeVoteData: EpisodeData[], 
    checkOverlap: boolean, 
    voteData: VoteData,
    nowEpisodeName: string
) {
    const willFetchData = [...episodeVoteData]
    return Promise.all(willFetchData.map(d => FetchVoteEpisode(d.episode, d.index)))
        .then(values => {
            values.forEach((value: any, index: number) => {
                if (!willFetchData[index].episode && !willFetchData[index].index) return ;
                if(value.isNotFound === false) {
                    willFetchData[index].error = "존재하지 않는 투고 정보입니다.";
                } else {
                    if(value.votable) {
                        willFetchData[index].song = value.song;
                        willFetchData[index].producer = value.producer;
                        willFetchData[index].error = '';
                        willFetchData[index].overlapped = false;
                    } else {
                        willFetchData[index].error = "투표 대상이 아닙니다.";
                    }
                }
            })

            if(checkOverlap && voteData) {
                const tempVoteData = {
                    ...voteData,
                    [nowEpisodeName || ""]: willFetchData,
                };
                willFetchData.forEach((data, index) => {
                    const isOverlapped: boolean = CheckOverlappedProducer(tempVoteData, data.producer);
                    if(!willFetchData[index].error && isOverlapped) {
                        willFetchData[index].overlapped = true;
                    } else if(
                        !willFetchData[index].error && 
                        isOverlapped && 
                        willFetchData[index].overlapped) {
                        willFetchData[index].overlapped = false;
                    }
                })
            } else {
                willFetchData.forEach((data, index) => {
                    let cnt = 1;
                    willFetchData.forEach(inner => {
                        if(data.producer === inner.producer) cnt--;
                    })
                    if(cnt < 0) willFetchData[index].overlapped = true;
                })
            }

            return willFetchData
        });
}