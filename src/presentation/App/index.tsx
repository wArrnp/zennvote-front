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
          { pageData !== PageData.LANDING && <Header pageData={pageData}/>}
          { RenderByPageData(pageData, setPageData) }
        </S.ContentInnerWrapper>
      </S.ContentWrapper>
      <Footer />
    </S.AppWrapper>
  );
};

export default App;