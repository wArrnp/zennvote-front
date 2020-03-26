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
          기본정보
        </S.HeaderListItem>
        <S.HeaderListItem isCurrent={pageNumber === 2}>
          증상/불편
        </S.HeaderListItem>
        <S.HeaderListItem isCurrent={pageNumber === 3}>
          생활 습관
        </S.HeaderListItem>
        <S.HeaderListItem isCurrent={pageNumber === 4}>
          기타
        </S.HeaderListItem>
      </S.HeaderWrapper>
      <S.ProgressWrapper>
        <S.ProgressBar percent={pageNumber * 25}/>
      </S.ProgressWrapper>
    </>
  );
};

export default Header;