import React, { useState, useCallback } from 'react';
import { SelectVoteItem } from '../../';

interface SelectVoteProps {
    maximumSelect: number;
    minimumSelect?: number;
    selectList: string[];
}

const SelectVote = ({ maximumSelect, minimumSelect, selectList }: SelectVoteProps) => {
    const [voteList, setVoteList] = useState<string[]>(new Array(maximumSelect).fill(""));

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
                    <SelectVoteItem selectList={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} selectedValue={voteValue} handleChangeSetVoteList={(v: string) => handleChangeSetVoteList(index, v)}/>
                ))
            }
        </>
    )
}

export default SelectVote
