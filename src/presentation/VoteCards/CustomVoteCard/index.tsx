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
                            <S.CustomVoteItemEpisode><b>{ dumData.episode.episode }</b>회 <b>{ dumData.episode.index }</b>번</S.CustomVoteItemEpisode>
                            <S.CustomVoteItemContent> { dumData.content } </S.CustomVoteItemContent>
                            <S.CustomVoteItemDeleteButton onClick={() => handleDeleteByIndex(index)}>-</S.CustomVoteItemDeleteButton>
                    </S.CustomVoteItemWrapper>
                ))
            }
            <S.CustomVoteEditWrapper>
                <S.CustomVoteEditTop>
                    <S.CustomVoteEditEpisode>
                        <S.CustomVoteEditShortField
                            value={episode}
                            type="number"
                            onChange={(e) => setEpisode(Number(e.target.value))}
                            placeholder="회차를 입력해주세요"/>
                        <S.CustomVoteEditDescription>회</S.CustomVoteEditDescription>
                        <S.CustomVoteEditShortField
                            value={index}
                            type="number"
                            onChange={(e) => setIndex(Number(e.target.value))}
                            placeholder="번호를 입력해주세요."/>
                        <S.CustomVoteEditDescription>번</S.CustomVoteEditDescription>
                    </S.CustomVoteEditEpisode>
                    <S.CustomVoteItemAddButton onClick={() => onClickSubmitButton(episode, index, content)}>
                        +
                    </S.CustomVoteItemAddButton>
                </S.CustomVoteEditTop>
                <S.CustomVoteEditContent 
                    placeholder="상 이름을 적어주세요."
                    onChange={(e) => setContent(e.target.value)}
                    value={content}/>
            </S.CustomVoteEditWrapper>
        </CS.VoteCardsWrapper>
    )
}

export default CustomVoteCard
