import React, { useState, useCallback } from 'react';
import { SelectVoteItem } from '../../';

import * as S from './Styles';

interface SelectVoteProps {
    maximumSelect: number;
    minimumSelect?: number;
    selectList: string[];
    reduxValue: string[] | undefined;
    confirmSelectVote: (voteData: string[]) => void;
}

const SelectVote = ({ maximumSelect, minimumSelect, selectList, reduxValue, confirmSelectVote }: SelectVoteProps) => {
    const [voteList, setVoteList] = useState<string[]>(reduxValue || []);

    const handleChangeSetVoteList = useCallback(
        (index: number, value: string) => {
            const newVoteList = [...voteList];

            newVoteList[index] = value;
            setVoteList(newVoteList);
        },
        [voteList, setVoteList],
    )
    
    return (
        <>
            {
                voteList.map((voteValue: string, index: number) => (
                    <SelectVoteItem key={`${index}-${voteValue}`} selectList={selectList} selectedValue={voteValue} handleChangeSetVoteList={(v: string) => handleChangeSetVoteList(index, v)}/>
                ))
            }
            <S.SelectVoteConfirmWrapper>
                <S.SelectVoteConfirm onClick={() => confirmSelectVote(voteList)}>
                    적용
                </S.SelectVoteConfirm>
            </S.SelectVoteConfirmWrapper>
        </>
    )
}

export default SelectVote
