import React from 'react';

import * as S from './Styles';

const VoteCustomDescription = () => {
    return (
        <S.VoteCustomDescriptionWrapper>
            커스텀이에요 ~
            <S.VoteCustomDescriptionDivision />
            앞서 부문에서 투표했던 프로듀서를 여기에서는 다시 투표 가능합니다.<br/>
            중복은 부문상에서만 안 되는 거예요~
            <S.VoteCustomDescriptionDivision />
        </S.VoteCustomDescriptionWrapper>
    );
};

export default VoteCustomDescription;