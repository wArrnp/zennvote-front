import React, { useState, useCallback, useEffect } from 'react';
import PageData from '../../entity/PageData';
import checkEmailRegex from '../../controller/CheckEmailRegex';
import { useDispatch, useSelector } from "react-redux";
import { setEmail as setReduxEmail } from '../../module/email';
import { StoreState } from '../../module';
import * as Alert from '../../util/Alert';

import * as S from './Styles';

interface EmailInputProps {
  setPageData: (pageData: number) => void
}

const EmailInput = ({ setPageData }:EmailInputProps) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { emailByRedux } = useSelector((state: StoreState) => ({ emailByRedux: state.email}));

  useEffect(() => {
    if(!!emailByRedux) {
      setEmail(emailByRedux);
    }
  }, [emailByRedux]);

  const onClickNext = useCallback((email) => {
    if(!checkEmailRegex(email)) {
      Alert.error("이메일 양식이 틀렸습니다.")
      return;
    }

    dispatch(setReduxEmail(email))
    setPageData(PageData.QUIZ);
  }, [setPageData, dispatch]);

  return (
    <S.EmailInputWrapper>
      <S.EmailInputTitle>
        이메일을 입력해주세요.
      </S.EmailInputTitle>
      <S.EmailInputDescription>
        본인의 메일주소를 적어주세요.
        <br />
        (중복 투표 방지용이며, 수집하지 않습니다. 누군지 닉네임과 연결지어 확인하지도 않습니다.)
        <br /><br />
        이 메일주소로 음원 다운로드 링크가 제공됩니다!
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