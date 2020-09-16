import React from 'react';

import * as S from './Styles';

const VoteMasterDescription = () => {
    return (
        <S.VoteMasterDescriptionWrapper>
            지난 시즌 대상 <b>Haruna</b>,<br/>
            명예 프로듀서인 <b>라일락P와 큐에P, 류드P, 처빕P, 아토P, 초코와 EnRyu, 모함과, 히키코모리, 태민, 이브넴 및</b><br/>
            이분들이 <b>참여한 유닛</b>은 투표 대상이 <b>아닙니다.</b>
            <S.VoteMasterDescriptionDivision />
            앞서 부문에서 투표했던 프로듀서를 여기에서는 다시 투표 가능합니다.<br/>
            중복은 부문상에서만 안 되는 거예요~
            <S.VoteMasterDescriptionDivision />
        </S.VoteMasterDescriptionWrapper>
    );
};

export default VoteMasterDescription;