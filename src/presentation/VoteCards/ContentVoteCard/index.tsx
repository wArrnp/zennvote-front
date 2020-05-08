import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValueThunk } from '../../../module/vote';

import * as CS from '../CommonStyles';

interface ContentVoteCardProps {
  setCanPass: (canPass: boolean) => void;
}

const ContentVoteCard: React.FC<ContentVoteCardProps> = ({ setCanPass }) => {
  const dispatch = useDispatch();
  const { content } = useSelector((state:StoreState) => ({
    content: state.vote.content
  }));

  useEffect(() => {
    const inputCount = content?.filter(v => !!v.episode && !!v.index).length || 0;
    const errorCount = content?.filter(v => !!v.error && !v.overlapped).length || 0;


    if(inputCount <= 3 && inputCount >= 1 && errorCount === 0) {
      setCanPass(true);
    }
  }, [content, setCanPass])

  const confirmEpisodeVote = useCallback((content) => {
    setCanPass(false);

    dispatch(
      setVoteByKeyValueThunk(
        content, 
        'content',
        true
      )
    );

  }, [dispatch, setCanPass]);

  return (
    <CS.VoteCardsWrapper>
      <CS.VoteCardsIndex>네번째 부문</CS.VoteCardsIndex>
      <CS.VoteCardsTitle>
        매력을 가득 담은 작품을 준비한 P에게 드리는!
        <CS.VoteCardsTitleBold>노래 그 이상</CS.VoteCardsTitleBold>
      </CS.VoteCardsTitle>
      <CS.VoteCardsDescription>
        노래 하나를 넘어선 다양한 볼거리, 즐길거리를 준비해서<br/>
        더 흥미롭게 감상할 수 있게 해 주었던 프로듀서님께 투표해주세요!<br/>
        최소 1명부터 최대 3명까지 쓰실 수 있습니다.
      </CS.VoteCardsDescription>
        <b>영상/번안/악기연주/편곡 등...</b> 단, 보컬이 직접 만든 결과물이어야 합니다!
      <CS.VoteCardsDescription>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDescription>
        <b>타부문과 중복투표 불가</b>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDivision />
      <EpisodeVote
        confirmEpisodeVote={confirmEpisodeVote}
        voteReduxData={content} />
    </CS.VoteCardsWrapper>
  );
};

export default ContentVoteCard;