import React, { useState, useCallback, useEffect } from 'react';
import RenderToVotePopular from '../../../controller/RenderToVotePopular';

import * as S from './Styles';

interface VotePopularProps {
    handleVotePart: (increase:number) => void;
    isVoteBack: boolean;
    setIsVoteBack: (isVoteBack: boolean) => void;
}

const VotePopular = ({handleVotePart, isVoteBack, setIsVoteBack}:VotePopularProps) => {
    const [pageStep, setPageStep] = useState(isVoteBack? 4: 0);

    useEffect(() => {
        if(isVoteBack) {
            setIsVoteBack(false);
        }
    }, [isVoteBack, setIsVoteBack, setPageStep])

    const handleClickButton = useCallback((increase: number) => {
        const increasedPageStep = pageStep + increase;
        if(increasedPageStep < 0) {
            setIsVoteBack(true);
            handleVotePart(-1);
        } else if(increasedPageStep > 4) {
            handleVotePart(1);
        } else {
            setPageStep(increasedPageStep);
        }
    }, [pageStep, handleVotePart, setIsVoteBack]);

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