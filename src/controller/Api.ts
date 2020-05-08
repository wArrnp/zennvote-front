import axios from 'axios';

export const getQuizDatas = () => {
  return axios.get(process.env.REACT_APP_SERVER_URL + "/quiz").then(res => res.data.result);
}

export const getSelectVote = (selectName: string) => {
  return axios.get(process.env.REACT_APP_SERVER_URL + "/choices/" + selectName).then(res => res.data.result);
}