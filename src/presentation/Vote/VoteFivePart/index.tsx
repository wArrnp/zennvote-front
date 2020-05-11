import React, { useState, useCallback, useEffect } from 'react';
import RenderToVoteFivePart from '../../../controller/RenderToVoteFivePart';

import * as S from './Styles';
import { useSnackbar } from 'notistack';

interface VoteFivePartProps {
  handleVotePart: (increase:number) => void;
  isVoteBack: boolean;
  setIsVoteBack: (isVoteBack: boolean) => void;
}

const VoteFivePart = ({handleVotePart, isVoteBack, setIsVoteBack}:VoteFivePartProps) => {
  const [pageStep, setPageStep] = useState(isVoteBack? 5: 0);
  const [canPass, setCanPass] = useState<string | undefined>('투표 정보를 입력해주세요.');
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if(isVoteBack) {
      setIsVoteBack(false);
    }
  }, [isVoteBack, setIsVoteBack, setPageStep])

  const handleClickButton = useCallback((increase: number) => {
    const increasedPageStep = pageStep + increase;
    if(increasedPageStep < 0) {
      handleVotePart(-1);
    } else if(increasedPageStep > 5) {
      if(canPass === undefined) {
        handleVotePart(1)
      } else {
        enqueueSnackbar(canPass, { variant: 'error' });
      }
    } else {
      if(increase > 0 && canPass !== undefined) {
        enqueueSnackbar(canPass, { variant: 'error' });
        return;
      }

      setPageStep(increasedPageStep);
    }
  }, [enqueueSnackbar, pageStep, handleVotePart, canPass])  

  return (
    <S.VoteFivePartWrapper>
      {RenderToVoteFivePart(pageStep, setCanPass)}
      <S.VoteFivePartButtonWrapper>
        <S.VoteFivePartButton
          isNext={false}
          onClick={() => handleClickButton(-1)}>
          이전
        </S.VoteFivePartButton>
        <S.VoteFivePartButton
          isNext={true}
          onClick={() => handleClickButton(1)}>
          다음
        </S.VoteFivePartButton>
      </S.VoteFivePartButtonWrapper>
    </S.VoteFivePartWrapper>
  );
};

export default VoteFivePart;