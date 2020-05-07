import axios from 'axios';

export const getQuizDatas = () => {
  return axios.get(process.env.REACT_APP_SERVER_URL + "/quiz").then(res => res.data.result);
}