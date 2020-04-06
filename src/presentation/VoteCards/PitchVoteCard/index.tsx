import React, { useCallback } from 'react';
import { EpisodeVote } from '../../';

import * as CS from '../CommonStyles';

const PitchVoteCard = () => {
  const confirmEpisodeVote = useCallback((d) => {
    console.log(d);
  }, []);

  return (
    <CS.VoteCardsWrapper>
      <CS.VoteCardsIndex>첫번째 부문</CS.VoteCardsIndex>
      <CS.VoteCardsTitle>
        이 성대가 대단하다! 
        <b>가창력이 뛰어난 프로듀서 상</b>
      </CS.VoteCardsTitle>
      <CS.VoteCardsDescription>
        내 생각에 가장 가창력이 뛰어난 것 같다고 생각하는 프로듀서분을 뽑아주세요.<br/>
        최소 1명부터 최대 5명까지 쓰실 수 있습니다.
      </CS.VoteCardsDescription>
      <CS.VoteCardsDescription>
        <b>타부문과 중복투표 불가</b>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDivision />
      <EpisodeVote
        confirmEpisodeVote={confirmEpisodeVote}
        voteCount={5}/>
    </CS.VoteCardsWrapper>
  );
};

export default PitchVoteCard;