import React, { useCallback, useState } from 'react';

import * as S from './Styles';
import { VoteMasterDescription, MasterVoteCard } from '../..';

interface VoteMasterProps {
    handleVotePart: (increase:number) => void;
    setIsVoteBack: (isVoteBack: boolean) => void;
}

const VoteMaster = ({ handleVotePart, setIsVoteBack }:VoteMasterProps) => {
    const [canPass, setCanPass] = useState<boolean>(false);

    const handleClickButton = useCallback((increase: number) => {
        if(increase < 0) setIsVoteBack(true);
        if(increase > 0 && !canPass) return ;
        handleVotePart(increase);
    }, [handleVotePart, setIsVoteBack, canPass]);

    return (
        <S.VoteMasterWrapper>
            <VoteMasterDescription />
            <MasterVoteCard setCanPass={setCanPass}/>
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