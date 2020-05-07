import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../module';

import * as S from './Styles';
import { VoteMessageDescription, DumVoteCard } from '../../';
import { setVoteByKeyValue } from '../../../module/vote';

interface VoteMessageProps {
    handleVotePart: (increase:number) => void;
}

const VoteMessage: React.FC<VoteMessageProps> = ({ handleVotePart }) => {
    const dispatch = useDispatch();
    const handleClickButton = useCallback((increase: number) => {
        handleVotePart(increase);
    }, [handleVotePart]);

    const { message = [] } = useSelector((state: StoreState) => ({
        message: state.vote.message
    }))

    const handleSubmitEdit = useCallback((episode: string, content: string) => {
        const newMessage = [...message, {
            episode,
            content,
        }];

        dispatch(setVoteByKeyValue("message", newMessage));
    }, [message, dispatch])

    const handleDeleteByIndex = useCallback((index: number) => {
        const newMessage = [...message];
        newMessage.splice(index, 1);
        
        dispatch(setVoteByKeyValue("message", newMessage));
    }, [message, dispatch])

    return (
        <S.VoteMessageWrapper>
            <VoteMessageDescription />
            <DumVoteCard 
                topPlaceholder="이름을 입력하세요"
                dumDataList={message}
                handleSubmitEdit={handleSubmitEdit}
                handleDeleteByIndex={handleDeleteByIndex}
            />
            <S.VoteMessageButtonWrapper>
                <S.VoteMessageButton
                    isNext={false}
                    onClick={() => handleClickButton(-1)}>
                    이전
                </S.VoteMessageButton>
                <S.VoteMessageButton
                    isNext={true}
                    onClick={() => handleClickButton(1)}>
                    다음
                </S.VoteMessageButton>
            </S.VoteMessageButtonWrapper>
        </S.VoteMessageWrapper>
    )
}

export default VoteMessage
