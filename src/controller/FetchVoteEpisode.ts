import axios from 'axios';

export default function FetchVoteEpisode(episode: number, index: number) {
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