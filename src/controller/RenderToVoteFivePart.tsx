import React from 'react';
import { PitchVoteCard, VoiceVoteCard, FunnyVoteCard, ContentVoteCard, OriginalVoteCard, VoteFivePartDescription } from '../presentation';

export default function(pageIndex:number): React.ReactNode {
  switch(pageIndex) {
    case 0:
      return <VoteFivePartDescription />
    case 1:
      return <PitchVoteCard />
    case 2:
      return <VoiceVoteCard />
    case 3:
      return <FunnyVoteCard />
    case 4:
      return <ContentVoteCard />
    case 5:
      return <OriginalVoteCard />
  }
}