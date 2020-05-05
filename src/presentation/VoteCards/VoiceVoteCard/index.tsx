import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValueThunk } from '../../../module/vote';

import * as CS from '../CommonStyles';

const VoiceVoteCard = () => {
  const dispatch = useDispatch();
  const { voice } = useSelector((state:StoreState) => ({
    voice: state.vote.voice
  }));

  const confirmEpisodeVote = useCallback((voice) => {
    dispatch(
      setVoteByKeyValueThunk(
        voice,
        'voice'
      )
    );

  }, [dispatch]);

  return (
    <CS.VoteCardsWrapper>
      <CS.VoteCardsIndex>두번째 부문</CS.VoteCardsIndex>
      <CS.VoteCardsTitle>
        이 목소리 실화..?! 
        <CS.VoteCardsTitleBold>멋진 목소리의 프로듀서 상</CS.VoteCardsTitleBold>
      </CS.VoteCardsTitle>
      <CS.VoteCardsDescription>
        내가 생각하기에 가장 멋지거나 아름답다고 생각하는 목소리를 지닌 프로듀서분을 뽑아주세요.<br/>
        최소 1명부터 최대 5명까지 쓰실 수 있습니다.
      </CS.VoteCardsDescription>
      <CS.VoteCardsDescription>
        <b>타부문과 중복투표 불가</b>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDivision />
      <EpisodeVote
        confirmEpisodeVote={confirmEpisodeVote}
        voteReduxData={voice} />
    </CS.VoteCardsWrapper>
  );
};

export default VoiceVoteCard;