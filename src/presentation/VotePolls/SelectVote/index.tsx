import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SelectVoteItem } from '../../';

import * as S from './Styles';
import { StoreState } from '../../../module';
import { setVoteByKeyValue } from '../../../module/vote';
import { setSelectVoteThunk } from '../../../module/selectVote';

interface SelectVoteProps {
    maximumSelect: number;
    minimumSelect: number;
    voteCardName: string;
    setCanPass: (canPass: boolean) => void;
}

const SelectVote = ({ maximumSelect, minimumSelect, voteCardName, setCanPass }: SelectVoteProps) => {
    const dispatch = useDispatch();
    const { selectVoteData = [], selectVoteProblem = [] } = useSelector((state: StoreState) => ({
        selectVoteData: state.vote[voteCardName],
        selectVoteProblem: state.selectVote[voteCardName],
    }))
    const [isOverlapped, setIsOverlapped] = useState<boolean>(false);

    useEffect(() => {
        if(selectVoteProblem.length === 0) {
            dispatch(setSelectVoteThunk(voteCardName))
        }
    }, [selectVoteProblem, dispatch, voteCardName])

    useEffect(() => {
        const inputCount = selectVoteData.filter(v => !!v).length || 0;
        if(inputCount <= maximumSelect && inputCount >= minimumSelect) {
            setCanPass(true);
        } else {
            setCanPass(false);
        }

    }, [selectVoteData, minimumSelect, maximumSelect, setCanPass])

    const handleChangeSetVoteList = useCallback(
        (index: number, value: string) => {
            const newVoteList = [...selectVoteData];
            let isOverlap = false;

            newVoteList[index] = value;

            newVoteList.forEach(forEachV => {
                
                if(newVoteList.filter(filterV => !!filterV && !!forEachV && filterV === forEachV).length > 1) {
                    isOverlap = true;
                }
            })

            dispatch(setVoteByKeyValue(voteCardName, newVoteList));

            setIsOverlapped(isOverlap);
        },
        [selectVoteData, dispatch, voteCardName],
    )
    
    return (
        <>
            {
                selectVoteData.map((voteValue: string, index: number) => (
                    <SelectVoteItem
                        key={`${index}-${voteValue}`}
                        selectList={selectVoteProblem}
                        selectedValue={voteValue}
                        selectedList={selectVoteData}
                        handleChangeSetVoteList={(v: string) => handleChangeSetVoteList(index, v)} />
                ))
            }
            {
                isOverlapped && (
                    <S.SelectVoteErrorMessage>
                        중복 투표가 존재합니다.
                    </S.SelectVoteErrorMessage>
                )
            }
        </>
    )
}

export default SelectVote
