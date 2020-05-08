import React, { useState, useCallback } from 'react'

import * as CS from '../CommonStyles';
import * as S from './Styles';

interface CustomVoteCardProps {
    dumDataList: any[];
    handleSubmitEdit: (episode: number, index: number, content: string) => void;
    handleDeleteByIndex: (index: number) => void;
}

const CustomVoteCard:React.FC<CustomVoteCardProps> = ({ dumDataList, handleSubmitEdit, handleDeleteByIndex }) => {
    const [episode, setEpisode] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const [content, setContent] = useState<string>("");

    const onClickSubmitButton = useCallback((episode, index, content) => {
        if(episode > 90 && episode < 101 && !!content) {
            handleSubmitEdit(episode, index, content);
            setEpisode(0);
            setIndex(0)
            setContent("");
        }
    }, [handleSubmitEdit, setEpisode, setIndex, setContent]);

    return (
        <CS.VoteCardsWrapper>
            {
                dumDataList.map((dumData, index) => (
                    <S.CustomVoteItemWrapper key={index}>
                        <p>
                            <span>회차 : { dumData.episode.episode }</span>
                            <span>번호 : { dumData.episode.index }</span>
                        </p>
                        <p>
                            { dumData.content }
                        </p>
                        <button onClick={() => handleDeleteByIndex(index)}>삭제</button>
                    </S.CustomVoteItemWrapper>
                ))
            }
            <S.CustomVoteEditWrapper>
                <S.CustomVoteEditTop
                    value={episode}
                    type="number"
                    onChange={(e) => setEpisode(Number(e.target.value))}
                    placeholder="회차를 입력해주세요"/>
                <S.CustomVoteEditTop
                    value={index}
                    type="number"
                    onChange={(e) => setIndex(Number(e.target.value))}
                    placeholder="번호를 입력해주세요."/>
                <S.CustomVoteEditContent 
                    placeholder="보내실 값을 보내주세요."
                    rows={3}
                    onChange={(e) => setContent(e.target.value)}
                    value={content}/>
                <button onClick={() => onClickSubmitButton(episode, index, content)}>추가</button>
            </S.CustomVoteEditWrapper>
        </CS.VoteCardsWrapper>
    )
}

export default CustomVoteCard
