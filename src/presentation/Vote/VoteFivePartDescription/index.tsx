import React, { useEffect } from 'react';

import * as S from './Styles';

interface VoteFivePartDescriptionProps {
  setCanPass: (canPass: boolean) => void;
}

const VoteFivePartDescription: React.FC<VoteFivePartDescriptionProps> = ({ setCanPass }) => {
  useEffect(() => {
    setCanPass(true);
  }, [setCanPass])

  return (
    <div>
      <S.PartialVoteTitle>
        5개 부문 시청자 심사위원 투표
      </S.PartialVoteTitle>
      인기상, 대상을 정하기 전에 총 <b>5개의 부문</b>이 있습니다.<br/>
      여기서는 닉네임이 아니라 회차와 번호로 투표합니다.
      <S.PartialRuleWrapper>
        <S.PartialVoteSubtitle>
          투표하면 안 되는 대상
        </S.PartialVoteSubtitle>
        <S.PartialVoteList>
          <li>1회 ~ 90회(이전 시즌) 출연자</li>
          <li>라일락, 큐에, 류드, 처빕, 아토, EnRyu, 초코P, 모함과P, 히키코모리, 태민, 이브넴</li>
          <li>위 11명이 참여한 참여한 유닛</li>
          <li>오프닝</li>
        </S.PartialVoteList>
        <S.PartialVoteSubtitle>
          이것도 읽고 가라구!
        </S.PartialVoteSubtitle>
        <S.PartialVoteList>
          <li>부문상에도 <b>유닛</b>을 뽑을 수 <b>있습니다.</b></li>
          <li>
            출연 회차와 곡이 달라도 <b>동일한 프로듀서</b>를 <b>서로 다른 부문</b>에 또 한번 더 <b>투표할 수 없습니다</b>. <br />
            즉, 가창력 상에 처빕의 A회 X번을 뽑고 음색상에 처빕의 C회 N번을 또 적어 넣을 수 없어요. <br />
            처빕은 5부문 합쳐서 딱 한번만 투표 가능한 것입니다.
          </li>
        </S.PartialVoteList>
      </S.PartialRuleWrapper>
    </div>
  );
};

export default VoteFivePartDescription;