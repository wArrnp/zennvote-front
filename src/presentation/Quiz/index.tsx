import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuizItem } from '../';
import { StoreState } from '../../module';
import { setQuizDataThunk, setQuizSelectedValueByIndex } from '../../module/quiz';
import PageData from '../../entity/PageData';


import * as S from './Styles';

interface QuizProps {
  setPageData: (pageData: number) => void;
  isBack: boolean;
  setIsBack: (isBack: boolean) => void;
}

const Quiz = ({ setPageData, isBack, setIsBack }: QuizProps) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const dispatch = useDispatch();
  const { quizDatas, selectedQuizValues } = useSelector((state: StoreState) => ({
    quizDatas: state.quiz.quizDatas,
    selectedQuizValues: state.quiz.selectedValues,
  }));

  useEffect(() => {
    if (!(
        (quizDatas?.length ?? 0) !== 0 && 
        (selectedQuizValues?.length ?? 0) !== 0)
      ) {
      dispatch(setQuizDataThunk());
    }
    if(
      (quizDatas?.length ?? 0) !== 0 &&
      isBack
    ) {
      setCurrentPageIndex(quizDatas.length - 1);
      setIsBack(false);
    }
  }, [quizDatas, selectedQuizValues, dispatch, isBack, setIsBack]);

  const handleQuizValues = useCallback((event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(setQuizSelectedValueByIndex(index, parseInt(event.target.value)));
  }, [dispatch]);

  const handleClickController = useCallback((increase: number) => {
    const increasedIndex = currentPageIndex + increase;
    if(!!quizDatas.length) {
      if(increase < 1) {
        if (increasedIndex < 0) {
          setPageData(PageData.EMAIL_INPUT);
          return;
        }

        setCurrentPageIndex(increasedIndex);
      } else {
        if(selectedQuizValues[currentPageIndex] !== -1) {
          if (increasedIndex >= quizDatas.length) {
            setPageData(PageData.VOTE);
            return;
          }

          setCurrentPageIndex(increasedIndex);
        }
      }
    }
  }, [currentPageIndex, quizDatas.length, selectedQuizValues, setPageData]);

  return (
    <S.QuizWrapper>
      <S.QuizContentWrapper>
        {
          quizDatas.length === 0 ? (
            <S.QuizLoadingWrapper>
              <S.QuizLoading />
            </S.QuizLoadingWrapper>
          ): (quizDatas?.length ?? 0) !== 0 && !!quizDatas[currentPageIndex] && (
            <QuizItem
              index={currentPageIndex}
              title={quizDatas[currentPageIndex].title}
              contents={quizDatas[currentPageIndex].contents}
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