import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValueThunk } from '../../../module/vote';

import * as CS from '../CommonStyles';

interface OriginalVoteCardProps {
  setCanPass: (canPass: string | undefined) => void;
}

const OriginalVoteCard: React.FC<OriginalVoteCardProps> = ({ setCanPass }) => {
  const dispatch = useDispatch();
  const { original } = useSelector((state:StoreState) => ({
    original: state.vote.original
  }));

  useEffect(() => {
    console.log(original);
    const inputCount = original?.filter(v => !!v.episode && !!v.index).length || 0;
    const errorCount = original?.filter(v => !!v.error).length || 0;

    if (inputCount < 1)
      setCanPass('필수 투표 항목입니다. 투표를 진행해주세요.');
    else if (errorCount > 0)
      setCanPass('투표 항목에 오류가 있습니다. 확인해주세요.');
    else {
      setCanPass(undefined);
    }
  }, [original, setCanPass])

  const confirmEpisodeVote = useCallback((original: any[]) => {
    setCanPass('투고 정보를 조회하고 있습니다. 잠시만 기다려주세요.');

    dispatch(
      setVoteByKeyValueThunk(
        original,
        'original',
        true
      )
    )

  }, [dispatch, setCanPass]);

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