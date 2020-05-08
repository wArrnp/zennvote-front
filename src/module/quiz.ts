import QuizData from "../entity/QuizData";
import { getQuizDatas } from "../controller/Api";

export interface IQuiz {
  quizDatas: QuizData[];
  selectedValues: number[];
};

const initialState: IQuiz = {
  quizDatas: [],
  selectedValues: [],
};

const SET_QUIZ_DATA = 'quiz/SET_QUIZ_DATA' as const;
const SET_QUIZ_SELECTED_VALUE = 'quiz/SET_QUIZ_SELECTED_VALUE' as const;

export const setQuizData = (quizDatas: QuizData[], selectedValues: number[]) => ({
  type: SET_QUIZ_DATA,
  quizDatas,
  selectedValues
});

export const setQuizSelectedValueByIndex = (index: number, selectedValue: number) => ({
  type: SET_QUIZ_SELECTED_VALUE,
  index,
  selectedValue
})

export const setQuizDataThunk = () => (dispatch: any): void => {
  getQuizDatas()
    .then(fetchedData => {
      dispatch(setQuizData(fetchedData, new Array(fetchedData.length).fill(-1)));
    });
}

export type QuizActionType = 
  ReturnType<typeof setQuizData> |
  ReturnType<typeof setQuizSelectedValueByIndex>;

export default function reducer(state:IQuiz = initialState, action: QuizActionType): IQuiz {
  switch(action.type) {
    case SET_QUIZ_DATA:
      return {
        ...state,
        quizDatas: action.quizDatas,
        selectedValues: action.selectedValues,
      };
      
    case SET_QUIZ_SELECTED_VALUE:
      const selectedValues = state.selectedValues;
      selectedValues[action.index] = action.selectedValue;

      return {
        ...state,
        selectedValues
      }

    default:
      return state;
  };
};