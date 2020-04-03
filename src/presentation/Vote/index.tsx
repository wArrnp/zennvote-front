import React, { useState, useCallback } from 'react';
import { VoteFivePart } from '../'
import PageData from '../../entity/PageData';

import './Styles';

interface VoteProps {
  setPageData: (pageData:number) => void;
}

const Vote = ({setPageData}: VoteProps) => {
  const [votePartIndex, setVotePartIndex] = useState<number>(0);

  const handleVotePart = useCallback((increase: number) => {
    const increasedVotePartIndex = votePartIndex + increase
    if(increasedVotePartIndex < 0) {
      setPageData(PageData.QUIZ);
    } else if(increasedVotePartIndex > 4) {
      console.log('good');
    } else {
      setVotePartIndex(increasedVotePartIndex)
    }
  }, [votePartIndex, setPageData])
  
  return (
    <div>
      <VoteFivePart handleVotePart={handleVotePart}/>  
    </div>
  );
};

export default Vote;