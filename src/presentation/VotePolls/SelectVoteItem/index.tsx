import React, { useState, useCallback } from 'react';
import ToggleImg from '../../../assets/image/bottom.png';

import * as S from './Styles';

interface SelectVoteItemProps {
    selectList: string[];
    selectedValue: string;
}

const SelectVoteItem = ({ selectList, selectedValue = "" }: SelectVoteItemProps) => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const onClickToggleDropdown = useCallback(
        () => {
            setShowDropdown(!showDropdown);
            setSearchKeyword('');
        },
        [setShowDropdown, setSearchKeyword, showDropdown],
    )

    return (
        <S.SelectVoteItemWrapper>
            <S.SelectVoteItemValueWrapper>
                <S.SelectVoteItemValue>
                    {selectedValue}
                </S.SelectVoteItemValue>
                <S.SelectVoteItemToggleImg
                    src={ToggleImg}
                    onClick={onClickToggleDropdown}
                    alt='toggle'/>
            </S.SelectVoteItemValueWrapper>
            <S.SelectVoteItemDropdown>

            </S.SelectVoteItemDropdown>
        </S.SelectVoteItemWrapper>
    )
}

export default SelectVoteItem
