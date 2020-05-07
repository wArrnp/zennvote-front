import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValueThunk } from '../../../module/vote';

import * as CS from '../CommonStyles';

const FunnyVoteCard = () => {
  const dispatch = useDispatch();
  const { funny } = useSelector((state:StoreState) => ({
    funny: state.vote.funny
  }));

  const confirmEpisodeVote = useCallback((funny) => {
    dispatch(
      setVoteByKeyValueThunk(
        funny,
        'funny',
        true
      )
    );

  }, [dispatch]);

  return (
    <CS.VoteCardsWrapper>
      <CS.VoteCardsIndex>세번째 부문</CS.VoteCardsIndex>
      <CS.VoteCardsTitle>
        나를 미친듯이 웃게 한  
        <CS.VoteCardsTitleBold>최고의 예능 프로듀서 상</CS.VoteCardsTitleBold>
      </CS.VoteCardsTitle>
      <CS.VoteCardsDescription>
        최소 1명부터 최대 3명까지 쓰실 수 있습니다.
      </CS.VoteCardsDescription>
      <CS.VoteCardsDescription>
        <b>타부문과 중복투표 불가</b>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDivision />
      <EpisodeVote
        confirmEpisodeVote={confirmEpisodeVote}
        voteReduxData={funny} />
    </CS.VoteCardsWrapper>
  );
};

export default FunnyVoteCard;