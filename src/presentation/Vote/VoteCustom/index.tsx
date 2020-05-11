import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../module';

import * as S from './Styles';
import { VoteCustomDescription, CustomVoteCard } from '../../';
import { setVoteByKeyValue } from '../../../module/vote';

interface VoteCustomProps {
    handleVotePart: (increase:number) => void;
}

const VoteCustom: React.FC<VoteCustomProps> = ({ handleVotePart }) => {
    const dispatch = useDispatch();
    const handleClickButton = useCallback((increase: number) => {
        handleVotePart(increase);
    }, [handleVotePart]);

    const { custom = [] } = useSelector((state: StoreState) => ({
        custom: state.vote.custom
    }))

    const handleSubmitEdit = useCallback((episode: number, index: number,  content: string) => {
        const newCustom = [...custom, {
            episode: {
                episode,
                index
            },
            content,
        }];

        dispatch(setVoteByKeyValue("custom", newCustom));
    }, [custom, dispatch])

    const handleDeleteByIndex = useCallback((index: number) => {
        const newCustom = [...custom];
        newCustom.splice(index, 1);
        
        dispatch(setVoteByKeyValue("custom", newCustom));
    }, [custom, dispatch])

    return (
        <S.VoteCustomWrapper>
            <VoteCustomDescription />
            <CustomVoteCard 
                dumDataList={custom}
                handleSubmitEdit={handleSubmitEdit}
                handleDeleteByIndex={handleDeleteByIndex}
            />
            <S.VoteCustomButtonWrapper>
                <S.VoteCustomButton
                    isNext={false}
                    onClick={() => handleClickButton(-1)}>
                    이전
                </S.VoteCustomButton>
                <S.VoteCustomButton
                    isNext={true}
                    onClick={() => handleClickButton(1)}>
                    다음
                </S.VoteCustomButton>
            </S.VoteCustomButtonWrapper>
        </S.VoteCustomWrapper>
    )
}

export default VoteCustom
