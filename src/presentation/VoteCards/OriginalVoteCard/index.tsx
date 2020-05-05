import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValueThunk } from '../../../module/vote';

import * as CS from '../CommonStyles';

const OriginalVoteCard = () => {
  const dispatch = useDispatch();
  const { original } = useSelector((state:StoreState) => ({
    original: state.vote.original
  }));

  const confirmEpisodeVote = useCallback((original) => {
    dispatch(
      setVoteByKeyValueThunk(
        original,
        'original'
      )
    )

  }, [dispatch]);

  return (
    <CS.VoteCardsWrapper>
      <CS.VoteCardsIndex>다섯번째 부문</CS.VoteCardsIndex>
      <CS.VoteCardsTitle>
        진짜 그 아이돌이 부른 것 같아!
        <CS.VoteCardsTitleBold>원곡재현상</CS.VoteCardsTitleBold>
      </CS.VoteCardsTitle>
      <CS.VoteCardsDescription>
        이거 정말 원곡 아니야?라는 생각이 들었던 곡에 투표해주세요!<br/>
        최소 1명부터 최대 3명까지 쓰실 수 있습니다.
      </CS.VoteCardsDescription>
      <CS.VoteCardsDescription>
        <b>
        &#8251; 목소리나 특징적인 창법이 그 곡을 불렀던 원래 아이돌을 떠올리게 하는 경우를 말해요~!
        </b>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDescription>
        <b>타부문과 중복투표 불가</b>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDivision />
      <EpisodeVote
        confirmEpisodeVote={confirmEpisodeVote}
        voteReduxData={original} />
    </CS.VoteCardsWrapper>
  );
};

export default OriginalVoteCard;