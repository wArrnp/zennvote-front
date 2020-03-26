import React, { useState, useCallback } from 'react';
import PageData from '../../entities/PageData';
import checkEmailRegex from '../../controller/CheckEmailRegex';

import * as S from './Styles';

interface EmailInputProps {
  setPageData: (pageData: number) => void
}

const EmailInput = ({ setPageData }:EmailInputProps) => {
  const [email, setEmail] = useState('');
  const onClickNext = useCallback((email) => {
    if(!checkEmailRegex(email)) {
      alert("이메일 양식이 틀렸습니다.")
      return;
    }
    setPageData(PageData.VOTE);
  }, [setPageData])

  return (
    <S.EmailInputWrapper>
      <S.EmailInputTitle>
        이메일을 입력해주세요.
      </S.EmailInputTitle>
      <S.EmailInputDescription>
        이메일은 추첨을 통해 상품을 제공하기 위함입니다. 그 외의 용도로 이메일을 수집하지 않으며 동의하실 경우 진행해주시길 바랍니다.
      </S.EmailInputDescription>
      <S.EmailInput placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <S.EmailInputButtonWrapper>
        <S.EmailInputButton isNext={false} onClick={() => setPageData(PageData.LANDING)}>이전</S.EmailInputButton>
        <S.EmailInputButton isNext={true} onClick={() => onClickNext(email)}>다음</S.EmailInputButton>
      </S.EmailInputButtonWrapper>
    </S.EmailInputWrapper>
  );
};

export default EmailInput;