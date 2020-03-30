import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuizItem } from '../';
import QuizData from '../../entities/QuizData';
import { StoreState } from '../../modules';
import { setQuizData } from '../../modules/quiz';
import PageData from '../../entities/PageData';

import * as S from './Styles';

interface QuizProps {
  setPageData: (pageData: number) => void
}

const Quiz = ({ setPageData }: QuizProps) => {
  const [ selectedQuizValues, setSelectedQuizValues ] = useState<number[]>([]);
  const [ quizzes, setQuizzes ] = useState<QuizData[]>([])
  const [ currentPageIndex, setCurrentPageIndex ] = useState<number>(0);
  const dispatch = useDispatch();
  const { quizDatas, reduxSelectedQuizValues } = useSelector((state:StoreState) => ({ quizDatas: state.quiz.quizDatas, reduxSelectedQuizValues: state.quiz.selectedValues }))

  useEffect(() => {
    if(!!quizDatas && quizDatas.length !== 0 && !!reduxSelectedQuizValues && reduxSelectedQuizValues.length !== 0) {
      setQuizzes(quizDatas);
      setSelectedQuizValues(reduxSelectedQuizValues);
      return;
    }
    const newQuizzes = [
      {
        title: '퀴즈 아이템 테스트', 
        choices: ['구구구', '구구구구', '구구구구구']
      }, 
      {
        title: '두번째 퀴즈 아이템 테스트',
        choices: ['멍멍멍', '멍멍멍멍', '멍멍멍멍멍', '멍멍멍멍멍멍']
      },
      {
        title: '세번째 퀴즈 아이템 테스트',
        choices: ['야옹야옹', '야옹야옹야옹', '야옹야옹야옹야옹', '야옹야옹야옹야옹야옹', '야옹야옹야옹야옹야옹야옹']
      }
    ];
    setQuizzes(newQuizzes);
    setSelectedQuizValues(new Array(newQuizzes.length).fill(-1));
  }, [quizDatas, reduxSelectedQuizValues])

  const handleQuizValues = useCallback((event:React.ChangeEvent<HTMLInputElement>, index:number) => {
    const newSelected = [...selectedQuizValues];
    newSelected[index] = parseInt(event.target.value);
    setSelectedQuizValues(newSelected);
  }, [selectedQuizValues])

  const handleClickController = useCallback((increase: number) => {
    if((currentPageIndex + increase) < 0 || (currentPageIndex + increase) >= quizzes.length) {
      dispatch(setQuizData(quizzes, selectedQuizValues));
      if((currentPageIndex + increase) < 0) {
        setPageData(PageData.EMAIL_INPUT);
      } else if((currentPageIndex + increase) >= quizzes.length) {
        setPageData(PageData.VOTE);
      }
      return false;
    }
    setCurrentPageIndex(currentPageIndex + increase)
  }, [currentPageIndex, quizzes, setCurrentPageIndex, dispatch, selectedQuizValues, setPageData])

  return (
    <S.QuizWrapper>
      <S.QuizContentWrapper>
        {
          !!quizzes && quizzes.length !== 0 && !!quizzes[currentPageIndex] && (
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