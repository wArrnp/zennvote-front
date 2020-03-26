import React, { useState } from 'react';
import PageData from '../../entities/PageData'
import Footer from '../Footer';
import RenderByPageData from '../../controller/RenderByPageData';
import { Header } from '../';

import * as S from './Styles';

const App = () => {
  const [ pageData, setPageData ] = useState(PageData.LANDING);

  return (
    <S.AppWrapper>
      <S.ContentWrapper>
        <S.ContentInnerWrapper>
          <S.SmallHeader>
            전국 프로듀서 노래자랑 시즌7 시상식 시청자 투표
          </S.SmallHeader>
          { pageData !== PageData.LANDING && <Header pageData={pageData}/>}
          { RenderByPageData(pageData, setPageData) }
        </S.ContentInnerWrapper>
      </S.ContentWrapper>
      <Footer />
    </S.AppWrapper>
  );
};

export default App;