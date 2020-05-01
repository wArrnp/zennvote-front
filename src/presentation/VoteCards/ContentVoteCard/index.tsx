import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValue } from '../../../module/vote';
import FetchVoteEpisode from '../../../controller/FetchVoteEpisode';

import * as CS from '../CommonStyles';

const ContentVoteCard = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state:StoreState) => ({
    content: state.vote.content
  }));

  const confirmEpisodeVote = useCallback((content) => {
    const fetchedContent = [...content];
    Promise.all(fetchedContent.map(d => FetchVoteEpisode(d.episode, d.index)))
      .then(values => {
        values.forEach((value: any, index: number) => {
          if(value.isNotFound === false) {
            fetchedContent[index].error = "존재하지 않는 투고 정보입니다.";
          } else {
            if(value.votable) {
              fetchedContent[index].song = value.song;
              fetchedContent[index].producer = value.producer;
            } else {
              fetchedContent[index].error = "투표 대상이 아닙니다.";
            }
          }
        })
        dispatch(setVoteByKeyValue('content', fetchedContent));
      });
  }, [dispatch]);

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