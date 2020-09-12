import axios from 'axios';
import VoteData from '../entity/VoteData';

export const getQuizDatas = () => {
  return axios.get(process.env.REACT_APP_SERVER_URL + "/quiz").then(res => res.data);
}

export const getSelectVote = (selectName: string) => {
  return axios.get(process.env.REACT_APP_SERVER_URL + "/choice/" + selectName).then(res => res.data.choices.filter((x: any) => x));
}

export const postVote = (fetchData: {
  email: string,
  data: VoteData
}) => {
  return axios.post(process.env.REACT_APP_SERVER_URL + "/vote", { email: fetchData.email, ...fetchData.data })
}