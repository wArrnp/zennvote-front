import React from 'react';

import * as S from './Styles';

const VoteMessageDescription = () => {
    return (
        <S.VoteMessageDescriptionWrapper>
            <S.VoteMessageDescriptionTitle>
            내가 주고싶은 상
            </S.VoteMessageDescriptionTitle>
            앞서 부문에서 투표했던 프로듀서를 여기에서는 다시 투표 가능합니다.<br/>
            중복은 부문상에서만 안 되는 거예요~
        </S.VoteMessageDescriptionWrapper>
    );
};

export default VoteMessageDescription;