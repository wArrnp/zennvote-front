import React, { useCallback } from 'react';

import * as S from './Styles';
import { VoteMasterDescription, MasterVoteCard } from '../..';

interface VoteMasterProps {
    handleVotePart: (increase:number) => void;
}

const VoteMaster = ({handleVotePart}:VoteMasterProps) => {

    const handleClickButton = useCallback((increase: number) => {
        handleVotePart(increase);
    }, [handleVotePart]);

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