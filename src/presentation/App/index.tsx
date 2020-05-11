import React, { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import PageData from '../../entity/PageData'
import Footer from '../Footer';
import RenderByPageData from '../../controller/RenderByPageData';
import { Header } from '../';

import * as S from './Styles';



const App = () => {
  const [ pageData, setPageData ] = useState(PageData.LANDING);
  const [ enableSearch ] = useState<boolean>(false);
  const [ isBack, setIsBack ] = useState<boolean>(false)
  const notistackRef = React.createRef<any>();

  const handleSnackbarAction = (key: any) => {
    return (
      <S.SnackbarCloseButton onClick={() => notistackRef.current.closeSnackbar(key)}>
        닫기
      </S.SnackbarCloseButton>
    )
  }

  return (
    <SnackbarProvider ref={notistackRef} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} action={handleSnackbarAction}>
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
    </SnackbarProvider>
  );
};

export default App;