import React, { ReactNode } from 'react';
import PageData from '../entity/PageData';
import { Landing, EmailInput, Quiz, Vote } from '../presentation';

export default function RenderByPageData(
  viewType: number, 
  setPageData: (pageData: number) => void,
  isBack: boolean,
  setIsBack: (isBack: boolean) => void
): ReactNode {
  switch(viewType) {
    case PageData.LANDING:
      return <Landing setPageData={setPageData} />;
    case PageData.EMAIL_INPUT:
      return <EmailInput setPageData={setPageData} />;
    case PageData.QUIZ:
      return <Quiz
        setPageData={setPageData}
        isBack={isBack}
        setIsBack={setIsBack}/>;
    case PageData.VOTE:
      return <Vote
        setPageData={setPageData}
        isBack={isBack}
        setIsBack={setIsBack} />;
  };
};