import QuizData from "../entity/QuizData";

export interface IQuiz {
  quizDatas: QuizData[];
  selectedValues: number[];
};

const initialState: IQuiz = {
  quizDatas: [],
  selectedValues: [],
};

const SET_QUIZ_DATA = 'quiz/SET_QUIZ_DATA' as const;

export const setQuizData = (quizDatas: QuizData[], selectedValues: number[]) => ({
  type: SET_QUIZ_DATA,
  quizDatas,
  selectedValues,
});

export type QuizActionType = 
  ReturnType<typeof setQuizData>;

export default function reducer(state:IQuiz = initialState, action: QuizActionType): IQuiz {
  switch(action.type) {
    case SET_QUIZ_DATA:
      return {
        ...state,
        quizDatas: action.quizDatas,
        selectedValues: action.selectedValues,
      };
    default:
      return state;
  };
};