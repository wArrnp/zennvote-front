import QuizData from '../entity/QuizData';

export const getQuizDatas = () => {
  return new Promise<QuizData[]>((resolve, reject) => {
    resolve([
      {
        title: '퀴즈 아이템 테스트',
        choices: ['구구구', '구구구구', '구구구구구'],
      },
      {
        title: '두번째 퀴즈 아이템 테스트',
        choices: ['멍멍멍', '멍멍멍멍', '멍멍멍멍멍', '멍멍멍멍멍멍'],
      },
      {
        title: '세번째 퀴즈 아이템 테스트',
        choices: ['야옹야옹', '야옹야옹야옹', '야옹야옹야옹야옹', '야옹야옹야옹야옹야옹', '야옹야옹야옹야옹야옹야옹'],
      },
    ]);
  });
};