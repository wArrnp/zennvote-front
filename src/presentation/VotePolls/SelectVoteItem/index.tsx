import React, { useState, useCallback } from 'react';
import ToggleImg from '../../../assets/image/bottom.png';

import * as S from './Styles';

interface SelectVoteItemProps {
    selectList: string[];
    selectedValue: string;
    handleChangeSetVoteList: (value: string) => void;
}

const SelectVoteItem = ({ selectList, selectedValue = "" , handleChangeSetVoteList}: SelectVoteItemProps) => {
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
                <S.SelectVoteItemSearch onChange={(e) => setSearchKeyword(e.target.value)} />
                <S.SelectVoteItemDropdownList>
                    {
                        selectList.filter(v => v.indexOf(searchKeyword) !== -1).map((selectValue: string) => (
                            <S.SelectVoteItemDropdownItem onClick={(e) => handleChangeSetVoteList(selectValue)}>
                                {selectValue}
                            </S.SelectVoteItemDropdownItem>
                        ))
                    }
                </S.SelectVoteItemDropdownList>
            </S.SelectVoteItemDropdown>
        </S.SelectVoteItemWrapper>
    )
}

export default SelectVoteItem
