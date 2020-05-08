import React, { useState, useCallback, useEffect } from 'react';
import RenderToVoteFivePart from '../../../controller/RenderToVoteFivePart';

import * as S from './Styles';

interface VoteFivePartProps {
  handleVotePart: (increase:number) => void;
  isVoteBack: boolean;
  setIsVoteBack: (isVoteBack: boolean) => void;
}

const VoteFivePart = ({handleVotePart, isVoteBack, setIsVoteBack}:VoteFivePartProps) => {
  const [pageStep, setPageStep] = useState(isVoteBack? 5: 0);

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
      handleVotePart(1)
    } else {
      setPageStep(increasedPageStep);
    }
  }, [pageStep, handleVotePart])  

  return (
    <S.VoteFivePartWrapper>
      {RenderToVoteFivePart(pageStep)}
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