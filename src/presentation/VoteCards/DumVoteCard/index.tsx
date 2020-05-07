import React, { useState, useCallback } from 'react'

import * as CS from '../CommonStyles';
import * as S from './Styles';

interface DumVoteCardProps {
    topPlaceholder: string;
    dumDataList: any[];
    handleSubmitEdit: (top: string, content: string) => void;
    handleDeleteByIndex: (index: number) => void;
}

const DumVoteCard:React.FC<DumVoteCardProps> = ({ topPlaceholder, dumDataList, handleSubmitEdit, handleDeleteByIndex }) => {
    const [topValue, setTopValue] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const onClickSubmitButton = useCallback((top, content) => {
        if(!!top && !!content) {
            handleSubmitEdit(top, content);
            setTopValue("");
            setContent("");
        }
    }, [handleSubmitEdit, setTopValue, setContent]);

    return (
        <CS.VoteCardsWrapper>
            {
                dumDataList.map((dumData, index) => (
                    <S.VoteDumItemWrapper key={index}>
                        <p>
                            {   
                                !!dumData.episode 
                                ? dumData.episode
                                : dumData.name
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
                    value={topValue}
                    onChange={(e) => setTopValue(e.target.value)}
                    placeholder={topPlaceholder}/>
                <S.VoteDumEditContent 
                    placeholder="보내실 값을 보내주세요."
                    rows={3}
                    onChange={(e) => setContent(e.target.value)}
                    value={content}/>
                <button onClick={() => onClickSubmitButton(topValue, content)}>추가</button>
            </S.VoteDumEditWrapper>
        </CS.VoteCardsWrapper>
    )
}

export default DumVoteCard
