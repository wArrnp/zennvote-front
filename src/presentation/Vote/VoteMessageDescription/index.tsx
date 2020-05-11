import React from 'react';

import * as S from './Styles';

const VoteMessageDescription = () => {
    return (
        <S.VoteMessageDescriptionWrapper>
            <S.VoteMessageDescriptionTitle>
            프로듀서님께 하고싶은 말
            </S.VoteMessageDescriptionTitle>
            노래자랑에 출연한 프로듀서님께 하고싶은 말이 있다면 적어주세요. <br />
            자기의 닉을 밝혀도 되고 익명도 됩니다. <br />
            <br />
            ※ 여러 명에게 쓸 시 메시지마다 누가 썼는지 반복해서 닉을 쓰지 않으면 익명처리됩니다.
        </S.VoteMessageDescriptionWrapper>
    );
};

export default VoteMessageDescription;