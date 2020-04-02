import React from 'react';
import { VoteFivePart } from '../'

import './Styles';

interface VoteProps {
  setPageData: (pageData:number) => void;
}

const Vote = ({setPageData}: VoteProps) => {
  return (
    <div>
      <VoteFivePart />  
    </div>
  );
};

export default Vote;