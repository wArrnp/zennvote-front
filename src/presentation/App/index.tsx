import React, { useState } from 'react';
import PageData from '../../entities/PageData'
import Footer from '../Footer';
import RenderByPageData from '../../controller/RenderByPageData';
import CancelVote from "../../controller/CancelVote";
import CloseImg from '../../assets/image/close.png';

import * as S from './Styles';

const App = () => {
  const [ pageData, setPageData ] = useState(PageData.LANDING.toString());
  const onClickCancelButton = CancelVote(setPageData)

  return (
    <S.AppWrapper>
      <S.ContentWrapper>
        <S.ContentInnerWrapper>
          <S.CancelButton onClick={onClickCancelButton}>
            <S.CancelImg src={CloseImg} alt="close"/>
          </S.CancelButton>
          { RenderByPageData(pageData, setPageData) }
        </S.ContentInnerWrapper>
      </S.ContentWrapper>
      <Footer />
    </S.AppWrapper>
  );
};

export default App;