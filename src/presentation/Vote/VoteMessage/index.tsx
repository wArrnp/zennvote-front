import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../module';

import * as S from './Styles';
import { VoteMessageDescription, MessageVoteCard } from '../../';
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

    const handleSubmitEdit = useCallback((name: string, content: string) => {
        const newMessage = [...message, {
            name,
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
            <MessageVoteCard
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
