import React, { useCallback } from 'react';
import PageData from '../../entities/PageData';

import * as S from './Styles'

interface LandingProps {
  setPageData: (pageData: number) => void
}

const Landing = ({ setPageData }:LandingProps ) => {
  const onClickNextButton = useCallback(() => {
    setPageData(PageData.EMAIL_INPUT)
  }, [ setPageData ]);

  return (
    <>
      <S.LandingHeader>
        <S.LandingTitle>
          투표 타이틀 위치
        </S.LandingTitle>
        <S.LandingSubTitle>
          투표 서브 타이틀 위치
        </S.LandingSubTitle>
      </S.LandingHeader>
      <S.LandingDescription>
        투표 설명에 해당하는 위치
      </S.LandingDescription>
      <S.LandingNextButton onClick={onClickNextButton}>
      </S.LandingNextButton>
    </>
  );
};

export default Landing;