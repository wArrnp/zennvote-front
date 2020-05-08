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
                        <p>
                            { 
                                dumData.name 
                            }
                        </p>
                        <p>
                            {
                                dumData.content
                            }
                        </p>
                        <button onClick={() => handleDeleteByIndex(index)}>삭제</button>
                    </S.VoteDumItemWrapper>
                ))
            }
            <S.VoteDumEditWrapper>
                <S.VoteDumEditTop
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력해주세요."/>
                <S.VoteDumEditContent 
                    placeholder="보내실 값을 보내주세요."
                    rows={3}
                    onChange={(e) => setContent(e.target.value)}
                    value={content}/>
                <button onClick={() => onClickSubmitButton(name, content)}>추가</button>
            </S.VoteDumEditWrapper>
        </CS.VoteCardsWrapper>
    )
}

export default MessageVoteCard
