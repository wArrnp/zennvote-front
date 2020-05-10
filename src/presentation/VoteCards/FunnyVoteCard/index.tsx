import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValueThunk } from '../../../module/vote';

import * as CS from '../CommonStyles';

interface FunnyVoteCardProps {
  setCanPass: (canPass: boolean) => void;
}

const FunnyVoteCard: React.FC<FunnyVoteCardProps> = ({ setCanPass }) => {
  const dispatch = useDispatch();
  const { funny } = useSelector((state:StoreState) => ({
    funny: state.vote.funny
  }));

  useEffect(() => {
    const inputCount = funny?.filter(v => !!v.episode && !!v.index).length || 0;
    const errorCount = funny?.filter(v => !!v.error).length || 0;

    if(inputCount <= 3 && inputCount >= 1 && errorCount === 0) {
      setCanPass(true);
    }
  }, [funny, setCanPass])

  const confirmEpisodeVote = useCallback((funny) => {
    setCanPass(false);

    dispatch(
      setVoteByKeyValueThunk(
        funny,
        'funny',
        true
      )
    );

  }, [dispatch, setCanPass]);

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