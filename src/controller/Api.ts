import axios from 'axios';
import VoteData from '../entity/VoteData';

export const getQuizDatas = () => {
  return axios.get(process.env.REACT_APP_SERVER_URL + "/quiz").then(res => res.data.result);
}

export const getSelectVote = (selectName: string) => {
  return axios.get(process.env.REACT_APP_SERVER_URL + "/choices/" + selectName).then(res => res.data.result);
}

export const postVote = (fetchData: {
  email: string,
  data: VoteData
}) => {
  return axios.post(process.env.REACT_APP_SERVER_URL + "/vote", fetchData)
}