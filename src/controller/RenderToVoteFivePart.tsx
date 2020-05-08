import React from 'react';
import { PitchVoteCard, VoiceVoteCard, FunnyVoteCard, ContentVoteCard, OriginalVoteCard, VoteFivePartDescription } from '../presentation';

export default function(pageIndex: number, setCanPass: (canPass: boolean) => void): React.ReactNode {
  switch(pageIndex) {
    case 0:
      return <VoteFivePartDescription setCanPass={setCanPass}/>
    case 1:
      return <PitchVoteCard setCanPass={setCanPass} />
    case 2:
      return <VoiceVoteCard setCanPass={setCanPass} />
    case 3:
      return <FunnyVoteCard setCanPass={setCanPass} />
    case 4:
      return <ContentVoteCard setCanPass={setCanPass} />
    case 5:
      return <OriginalVoteCard setCanPass={setCanPass} />
  }
}