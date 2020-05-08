import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuizItem } from '../';
import QuizData from '../../entity/QuizData';
import { StoreState } from '../../module';
import { setQuizData } from '../../module/quiz';
import PageData from '../../entity/PageData';
import { getQuizDatas } from '../../controller/Api';
import * as Alert from '../../util/Alert';

import * as S from './Styles';

interface QuizProps {
  setPageData: (pageData: number) => void;
}

const Quiz = ({ setPageData }: QuizProps) => {
  const [selectedQuizValues, setSelectedQuizValues] = useState<number[]>([]);
  const [quizzes, setQuizzes] = useState<QuizData[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const dispatch = useDispatch();
  const { quizDatas, reduxSelectedQuizValues } = useSelector((state: StoreState) => ({
    quizDatas: state.quiz.quizDatas,
    reduxSelectedQuizValues: state.quiz.selectedValues,
  }));

  useEffect(() => {
    if ((quizDatas?.length ?? 0) !== 0 && (reduxSelectedQuizValues?.length ?? 0) !== 0) {
      setQuizzes(quizDatas);
      setSelectedQuizValues(reduxSelectedQuizValues);
      return;
    }
    getQuizDatas()
      .then((res:any) => {
        setQuizzes(res);
        setSelectedQuizValues(new Array(res.length).fill(-1));
      });
  }, [quizDatas, reduxSelectedQuizValues]);

  const handleQuizValues = useCallback((event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newSelected = [...selectedQuizValues];
    newSelected[index] = parseInt(event.target.value);
    setSelectedQuizValues(newSelected);
  }, [selectedQuizValues]);

  const handleClickController = useCallback((increase: number) => {
    const increasedIndex = currentPageIndex + increase;
    if (increasedIndex < 0 || increasedIndex >= quizzes.length) {
      dispatch(setQuizData(quizzes, selectedQuizValues));
      if (increasedIndex < 0) {
        setPageData(PageData.EMAIL_INPUT);
      } else if (increasedIndex >= quizzes.length) {
        if(selectedQuizValues.filter((v) => v === -1).length !== 0) {
          Alert.error("참가하지 않은 퀴즈가 있습니다.");
          return false
        }
        setPageData(PageData.VOTE);
      }
      return false;
    }
    setCurrentPageIndex(increasedIndex);
  }, [currentPageIndex, quizzes, setCurrentPageIndex, dispatch, selectedQuizValues, setPageData]);

  return (
    <S.QuizWrapper>
      <S.QuizContentWrapper>
        {
          (quizzes?.length ?? 0) !== 0 && !!quizzes[currentPageIndex] && (
            <QuizItem
              index={currentPageIndex}
              title={quizzes[currentPageIndex].title}
              contents={quizzes[currentPageIndex].contents}
              selectedIndex={selectedQuizValues[currentPageIndex]}
              handleQuizSelect={
                (event: React.ChangeEvent<HTMLInputElement>) => handleQuizValues(event, currentPageIndex)
              } />
          )
        }
      </S.QuizContentWrapper>
      <S.QuizButtonWrapper>
        <S.QuizButton
          isNext={false}
          onClick={() => handleClickController(-1)}>
          이전
        </S.QuizButton>
        <S.QuizButton
          isNext={true}
          onClick={() => handleClickController(1)}>
          다음
        </S.QuizButton>
      </S.QuizButtonWrapper>
    </S.QuizWrapper>
  );
};

export default Quiz;