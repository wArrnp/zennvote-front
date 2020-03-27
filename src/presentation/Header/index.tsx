import React, { useState, useEffect } from 'react';
import getCurrentPageNumber from '../../controller/GetCurrentPageNumber';

import * as S from './Styles';

interface HeaderProps {
  pageData: number
}

const Header = ({pageData}: HeaderProps) => {
  const [ pageNumber, setPageNumber ] = useState(1);

  useEffect(() => {
    setPageNumber(getCurrentPageNumber(pageData))
  }, [pageData])
  
  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderListItem isCurrent={pageNumber === 1}>
          이메일 입력
        </S.HeaderListItem>
        <S.HeaderListItem isCurrent={pageNumber === 2}>
          퀴즈
        </S.HeaderListItem>
        <S.HeaderListItem isCurrent={pageNumber === 3}>
          투표
        </S.HeaderListItem>
        <S.HeaderListItem isCurrent={pageNumber === 4}>
          투표 확인
        </S.HeaderListItem>
      </S.HeaderWrapper>
      <S.ProgressWrapper>
        <S.ProgressBar percent={pageNumber * 25}/>
      </S.ProgressWrapper>
    </>
  );
};

export default Header;