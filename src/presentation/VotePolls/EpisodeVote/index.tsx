import React, { useState, useCallback } from 'react';
import EpisodeData from '../../../entity/EpisodeData';

import * as S from './Styles';

interface EpisodeVoteProps {
  confirmEpisodeVote: (values: EpisodeData[]) => void;
  voteCount: number;
}


const EpisodeVote = ({ confirmEpisodeVote, voteCount }: EpisodeVoteProps) => {
  const [voteData, setVoteData] = useState<EpisodeData[]>(new Array(voteCount).fill(-1).map((v,i) => {
    return {
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    }
  }));

  const handleChangeInput = useCallback((key, value, index) => {
    const newArray = [...voteData];
    newArray.splice(index, 1, {
      ...voteData[index],
      [key]: value
    });
    setVoteData(newArray);
  }, [voteData, setVoteData])

  return (
    <S.EpisodeVoteWrapper>
      {
        voteData.map((data, index) => (
          <S.EpisodeVote key={index}>
            <S.EpisodeVoteInputWrapper>
              <S.EpisodeVoteInput
                type="number"
                onChange={(e) => handleChangeInput("episode", Number(e.target.value), index)} value={data.episode} />
              회 
            </S.EpisodeVoteInputWrapper>
            <S.EpisodeVoteInputWrapper>
              <S.EpisodeVoteInput
                type="number"
                onChange={(e) => handleChangeInput("index", Number(e.target.value), index)}
                value={data.index} />
              번
            </S.EpisodeVoteInputWrapper>
          </S.EpisodeVote>
        ))
      }
      <S.EpisodeVoteConfirm onClick={() => confirmEpisodeVote(voteData)}>
        적용
      </S.EpisodeVoteConfirm>
    </S.EpisodeVoteWrapper>
  );
};

export default EpisodeVote;