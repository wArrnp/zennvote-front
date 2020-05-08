import React from 'react';

import * as S from './Styles';

const VoteCustomDescription = () => {
    return (
        <S.VoteCustomDescriptionWrapper>
            <S.VoteCustomDescriptionTitle>
            내가 주고싶은 상
            </S.VoteCustomDescriptionTitle>
            직접 수상하고 싶은 상 부문과 수상자가 있다면 적어주세요. <br />
            재미있는 아이디어가 있다면 소개하겠습니다.
        </S.VoteCustomDescriptionWrapper>
    );
};

export default VoteCustomDescription;