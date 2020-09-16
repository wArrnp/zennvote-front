import React, { useState, useCallback, useEffect } from 'react';
import RenderToVotePopular from '../../../controller/RenderToVotePopular';

import * as S from './Styles';
import { useSnackbar } from 'notistack';

interface VotePopularProps {
    handleVotePart: (increase:number) => void;
    isVoteBack: boolean;
    setIsVoteBack: (isVoteBack: boolean) => void;
}

const VotePopular = ({handleVotePart, isVoteBack, setIsVoteBack}:VotePopularProps) => {
    const [pageStep, setPageStep] = useState(isVoteBack? 4: 0);
    const [canPass, setCanPass] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

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
            if(canPass) {
                handleVotePart(1);
            } else {
                enqueueSnackbar('투표 조건을 확인해주세요.', { variant: 'error' });
            }
        } else {
            if(increase > 0 && !canPass) {
                enqueueSnackbar('투표 조건을 확인해주세요.', { variant: 'error' });
                return;
            }

            setCanPass(false);
            setPageStep(increasedPageStep);
        }
    }, [pageStep, setIsVoteBack, handleVotePart, canPass, enqueueSnackbar]);

    return (
        <S.VotePopularWrapper>
            {RenderToVotePopular(pageStep, setCanPass)}
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