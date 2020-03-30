import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuizItem } from '../';
import QuizData from '../../entity/QuizData';
import { StoreState } from '../../module';
import { setQuizData } from '../../module/quiz';
import PageData from '../../entity/PageData';

import * as S from './Styles';

interface QuizProps {
  setPageData: (pageData: number) => void
}

const Quiz = ({ setPageData }: QuizProps) => {
  const [selectedQuizValues, setSelectedQuizValues] = useState<number[]>([]);
  const [quizzes, setQuizzes] = useState<QuizData[]>([])
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
    const newQuizzes = [
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
    ];
    setQuizzes(newQuizzes);
    setSelectedQuizValues(new Array(newQuizzes.length).fill(-1));
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
        setPageData(PageData.VOTE);
      }
      return false;
    }
    setCurrentPageIndex(increasedIndex)
  }, [currentPageIndex, quizzes, setCurrentPageIndex, dispatch, selectedQuizValues, setPageData]);

  return (
    <S.QuizWrapper>
      <S.QuizContentWrapper>
        {
          (quizzes?.length ?? 0) !== 0 && !!quizzes[currentPageIndex] && (
            <QuizItem
              title={quizzes[currentPageIndex].title}
              choices={quizzes[currentPageIndex].choices}
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