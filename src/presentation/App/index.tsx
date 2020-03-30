import React, { useState } from 'react';
import PageData from '../../entities/PageData'
import Footer from '../Footer';
import RenderByPageData from '../../controller/RenderByPageData';
import { Header } from '../';
import { createGlobalStyle } from 'styled-components';

import * as S from './Styles';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
`


const App = () => {
  const [ pageData, setPageData ] = useState(PageData.LANDING);

  return (
    <S.AppWrapper>
      <GlobalStyle />
      <S.ContentWrapper>
        <S.ContentInnerWrapper>
          { pageData !== PageData.LANDING && <Header pageData={pageData}/>}
          { RenderByPageData(pageData, setPageData) }
        </S.ContentInnerWrapper>
      </S.ContentWrapper>
      <Footer />
    </S.AppWrapper>
  );
};

export default App;