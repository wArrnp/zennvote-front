import React, { useCallback } from 'react';

import * as S from './Styles';
import { VoteMasterDescription, MasterVoteCard } from '../..';

interface VoteMasterProps {
    handleVotePart: (increase:number) => void;
    setIsVoteBack: (isVoteBack: boolean) => void;
}

const VoteMaster = ({ handleVotePart, setIsVoteBack }:VoteMasterProps) => {

    const handleClickButton = useCallback((increase: number) => {
        if(increase < 0) setIsVoteBack(true);
        handleVotePart(increase);
    }, [handleVotePart, setIsVoteBack]);

    return (
        <S.VoteMasterWrapper>
            <VoteMasterDescription />
            <MasterVoteCard />
            <S.VoteMasterButtonWrapper>
                <S.VoteMasterButton
                    isNext={false}
                    onClick={() => handleClickButton(-1)}>
                        이전
                </S.VoteMasterButton>
                <S.VoteMasterButton
                    isNext={true}
                    onClick={() => handleClickButton(1)} >
                        다음
                </S.VoteMasterButton>
            </S.VoteMasterButtonWrapper>
        </S.VoteMasterWrapper>
    );
};

export default VoteMaster;