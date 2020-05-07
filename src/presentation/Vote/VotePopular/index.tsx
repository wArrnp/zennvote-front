import React, { useState, useCallback } from 'react';
import RenderToVotePopular from '../../../controller/RenderToVotePopular';

import * as S from './Styles';

interface VotePopularProps {
    handleVotePart: (increase:number) => void;
}

const VotePopular = ({handleVotePart}:VotePopularProps) => {
    const [pageStep, setPageStep] = useState(0);

    const handleClickButton = useCallback((increase: number) => {
        const increasedPageStep = pageStep + increase;
        if(increasedPageStep < 0) {
            handleVotePart(-1);
        } else if(increasedPageStep > 4) {
            handleVotePart(1);
        } else {
            setPageStep(increasedPageStep);
        }
    }, [pageStep, handleVotePart]);

    return (
        <S.VotePopularWrapper>
            {RenderToVotePopular(pageStep)}
            <S.VotePopularButtonWrapper>
                <S.VotePopularButton
                    isNext={false}
                    onClick={() => handleClickButton(-1)}>
                        이전
                </S.VotePopularButton>
                <S.VotePopularButton
                    isNext={true}
                    onClick={() => handleClickButton(1)} >
                        다음
                </S.VotePopularButton>
            </S.VotePopularButtonWrapper>
        </S.VotePopularWrapper>
    );
};

export default VotePopular;