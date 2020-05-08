import React, { useState, useCallback, useEffect } from 'react';
import PageData from '../../entity/PageData';
import RenderVoteByIndex from '../../controller/RenderVoteByIndex';

import './Styles';

interface VoteProps {
  setPageData: (pageData:number) => void;
  isBack: boolean;
  setIsBack: (isBack: boolean) => void;
}

const Vote = ({setPageData, isBack, setIsBack }: VoteProps) => {
  const [votePartIndex, setVotePartIndex] = useState<number>(0);
  const [isVoteBack, setIsVoteBack] = useState<boolean>(false);

  useEffect(() => {
    if(isBack) {
      setIsBack(false);
      setVotePartIndex(4);
    }
  }, [isBack, setIsBack, setIsVoteBack])

  const handleVotePart = useCallback((increase: number) => {
    const increasedVotePartIndex = votePartIndex + increase
    if(increasedVotePartIndex < 0) {
      setIsBack(true);
      setPageData(PageData.QUIZ);
    } else if(increasedVotePartIndex > 4) {
      console.log('good');
    } else {
      setVotePartIndex(increasedVotePartIndex)
    }
  }, [votePartIndex, setPageData, setIsBack])
  
  return (
    <div>
      { RenderVoteByIndex(
          votePartIndex, 
          handleVotePart,
          isVoteBack,
          setIsVoteBack) } 
    </div>
  );
};

export default Vote;