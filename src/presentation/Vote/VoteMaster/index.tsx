import React, { useCallback, useState } from 'react';

import * as S from './Styles';
import { MasterVoteCard } from '../..';
import { useSnackbar } from 'notistack';

interface VoteMasterProps {
    handleVotePart: (increase:number) => void;
    setIsVoteBack: (isVoteBack: boolean) => void;
}

const VoteMaster = ({ handleVotePart, setIsVoteBack }:VoteMasterProps) => {
    const [canPass, setCanPass] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleClickButton = useCallback((increase: number) => {
        if(increase < 0) setIsVoteBack(true);
        if(increase > 0 && !canPass) {
            enqueueSnackbar('투표 조건을 확인해주세요.', { variant: 'error' });
            return;
        }
        handleVotePart(increase);
    }, [setIsVoteBack, canPass, handleVotePart, enqueueSnackbar]);

    return (
        <S.VoteMasterWrapper>
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