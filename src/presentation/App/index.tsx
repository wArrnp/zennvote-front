import React, { useState } from 'react';
import PageData from '../../entity/PageData'
import Footer from '../Footer';
import RenderByPageData from '../../controller/RenderByPageData';
import { Header } from '../';
import SearchImg from '../../assets/image/search.png';

import * as S from './Styles';



const App = () => {
  const [ pageData, setPageData ] = useState(PageData.LANDING);
  const [ enableSearch, setEnableSearch ] = useState<boolean>(false);
  const [ isBack, setIsBack ] = useState<boolean>(false);

  return (
    <S.AppWrapper>
      <S.GlobalStyle />
      <S.ContentWrapper enableSearch={enableSearch}>
        <S.ContentInnerWrapper>
          { pageData !== PageData.LANDING && pageData !== PageData.FINISH && <Header pageData={pageData}/>}
          { RenderByPageData(pageData, setPageData, isBack, setIsBack) }
        </S.ContentInnerWrapper>
      </S.ContentWrapper>
      <Footer />
    </S.AppWrapper>
  );
};

export default App;