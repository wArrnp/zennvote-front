import React, { useState, useCallback } from 'react'

import * as CS from '../CommonStyles';
import * as S from './Styles';

interface MessageVoteCardProps {
    dumDataList: any[];
    handleSubmitEdit: (top: string, content: string) => void;
    handleDeleteByIndex: (index: number) => void;
}

const MessageVoteCard:React.FC<MessageVoteCardProps> = ({ dumDataList, handleSubmitEdit, handleDeleteByIndex }) => {
    const [name, setName] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const onClickSubmitButton = useCallback((name, content) => {
        if(!!name && !!content) {
            handleSubmitEdit(name, content);
            setName("");
            setContent("");
        }
    }, [handleSubmitEdit, setName, setContent]);

    return (
        <CS.VoteCardsWrapper>
            {
                dumDataList.map((dumData, index) => (
                    <S.VoteDumItemWrapper key={index}>
                        <S.VoteDumItemTop>
                            <S.VoteDumItemName><b>{ dumData.name }</b> 에게</S.VoteDumItemName>
                            <S.VoteDumItemDeleteButton onClick={() => handleDeleteByIndex(index)}>-</S.VoteDumItemDeleteButton>
                        </S.VoteDumItemTop>
                        <S.VoteDumItemContent>
                            { dumData.content.split('\n').map((line: string) => (<>{line} <br/></>)) }
                        </S.VoteDumItemContent>
                    </S.VoteDumItemWrapper>
                ))
            }
            <S.VoteDumEditWrapper>
                <S.VoteDumEditTop>
                    <S.VoteDumEditShortField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름을 입력해주세요."/>
                    <S.CustomVoteItemAddButton onClick={() => onClickSubmitButton(name, content)} disabled={dumDataList.length === 5}>
                        +
                    </S.CustomVoteItemAddButton>
                </S.VoteDumEditTop>
                <S.VoteDumEditContent 
                    placeholder="보내실 값을 보내주세요."
                    rows={3}
                    onChange={(e) => setContent(e.target.value)}
                    value={content}/>
            </S.VoteDumEditWrapper>
        </CS.VoteCardsWrapper>
    )
}

export default MessageVoteCard
