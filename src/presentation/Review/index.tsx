import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux';
import { StoreState } from '../../module';
import VoteData from '../../entity/VoteData';

import * as S from './Styles';
import RemoveEmptyField from '../../controller/RemoveEmptyField';
import PageData from '../../entity/PageData';
import { postVote } from '../../controller/Api';

interface ReviewProps {
  setPageData: (pageData: number) => void;
  setIsBack: (isBack: boolean) => void;
}

const Review: React.FC<ReviewProps> = ({ setPageData, setIsBack }) => {
    const [willFetchData, setWillFetchData] = useState<{
        email: string,
        data: VoteData
    }>({email: '', data: {}});
    const [isLoading, setIsLoading] = useState(true);
    const { vote, email, quiz } = useSelector((state: StoreState) => ({
        vote: state.vote,
        email: state.email,
        quiz: state.quiz
    }));

    useEffect(() => {
        setWillFetchData({
            email: email,
            data: {
                problem: [1,1,1,1,1,1,1,1,1],
                // problem: quiz.selectedValues, 여기 주석 풀면된다, 윗줄 지우고
                ...RemoveEmptyField(vote)
            }
        });
        setIsLoading(false);
    }, [vote, email, quiz]);

    const handleGoBack = useCallback(() => {
        setIsBack(true);
        setPageData(PageData.VOTE);
    }, [setIsBack, setPageData]);

    const handleSubmitVote = useCallback(() => {
        if(!isLoading) {
            postVote(willFetchData).then(res => {
                if(res.status === 200 && res.data.succeed) {
                    setPageData(PageData.FINISH);
                }
            })
        }
    }, [isLoading, willFetchData, setPageData])

    return (
        <S.ReviewContainer>
            <S.ReviewContentContainer>
                {
                    isLoading ? 
                    "잠시만용 ~": (
                        <>
                            {/* 이메일 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    이메일 주소
                                </S.ReviewContentItemTitle>
                                {willFetchData.email || 'test@no.mail'}
                            </S.ReviewContentItemWrapper>

                            {/* 가창력 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    가창력 상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.pitch?.map((v) => (
                                        <S.ReviewContentItem key={`${v.song}-${v.producer}`}>
                                            <p>
                                                {v.song}
                                            </p>
                                            <S.ReviewContentItemBottom>
                                                {v.producer}
                                            </S.ReviewContentItemBottom>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 음색 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    음색 상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.voice?.map((v) => (
                                        <S.ReviewContentItem key={`${v.song}-${v.producer}`}>
                                            <p>
                                                {v.song}
                                            </p>
                                            <S.ReviewContentItemBottom>
                                                {v.producer}
                                            </S.ReviewContentItemBottom>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 예능 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    예능 상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.funny?.map((v) => (
                                        <S.ReviewContentItem key={`${v.song}-${v.producer}`}>
                                            <p>
                                                {v.song}
                                            </p>
                                            <S.ReviewContentItemBottom>
                                                {v.producer}
                                            </S.ReviewContentItemBottom>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 컨텐츠 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    컨텐츠 상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.content?.map((v) => (
                                        <S.ReviewContentItem key={`${v.song}-${v.producer}`}>
                                            <p>
                                                {v.song}
                                            </p>
                                            <S.ReviewContentItemBottom>
                                                {v.producer}
                                            </S.ReviewContentItemBottom>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 원곡 재현 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    원곡 재현 상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.original?.map((v) => (
                                        <S.ReviewContentItem key={`${v.song}-${v.producer}`}>
                                            <p>
                                                {v.song}
                                            </p>
                                            <S.ReviewContentItemBottom>
                                                {v.producer}
                                            </S.ReviewContentItemBottom>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 잠이 안오는(인기상) 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    잠이 안오는 상(인기상)
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.sleep?.map((v) => (
                                        <S.ReviewContentItem key={`${v.song}-${v.producer}`}>
                                            <p>
                                                {v.song}
                                            </p>
                                            <S.ReviewContentItemBottom>
                                                {v.producer}
                                            </S.ReviewContentItemBottom>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 유닛상 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    유닛상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.unit?.map((v) => (
                                        <S.ReviewContentItem key={v}>
                                            <p>
                                                {v}
                                            </p>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 신인상 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    신인상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.new?.map((v) => (
                                        <S.ReviewContentItem key={v}>
                                            <p>
                                                {v}
                                            </p>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 성장상 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    성장상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.grow?.map((v) => (
                                        <S.ReviewContentItem key={v}>
                                            <p>
                                                {v}
                                            </p>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 대상 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    대상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.master?.map((v) => (
                                        <S.ReviewContentItem key={v}>
                                            <p>
                                                {v}
                                            </p>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 내가 주고싶은 상 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    내가 주고싶은 상
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.custom?.map((v) => (
                                        <S.ReviewContentItem key={`${v.episode.episode}-${v.episode.index}-${v.content}`}>
                                            <p>
                                                <span>
                                                    {v.episode.episode}
                                                    {v.episode.index}
                                                </span>
                                            </p>
                                            <S.ReviewContentItemBottom>
                                                {v.content}
                                            </S.ReviewContentItemBottom>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>

                            {/* 메시지 돌아보기 */}
                            <S.ReviewContentItemWrapper>
                                <S.ReviewContentItemTitle>
                                    메시지
                                </S.ReviewContentItemTitle>
                                {
                                    willFetchData.data.message?.map((v) => (
                                        <S.ReviewContentItem key={`${v.name}-${v.content}`}>
                                            <p>
                                                {v.name}
                                            </p>
                                            <S.ReviewContentItemBottom>
                                                {v.content}
                                            </S.ReviewContentItemBottom>
                                        </S.ReviewContentItem>
                                    )) || ''
                                }
                            </S.ReviewContentItemWrapper>
                        </>
                    )
                }
                <S.ReviewButtonWrapper>
                  <S.ReviewButton
                    isNext={false}
                    onClick={() => handleGoBack()}>
                    이전
                  </S.ReviewButton>
                  <S.ReviewButton
                    isNext={true}
                    onClick={handleSubmitVote}>
                    완료
                  </S.ReviewButton>
                </S.ReviewButtonWrapper>
            </S.ReviewContentContainer>
        </S.ReviewContainer>
    )
}

export default Review;