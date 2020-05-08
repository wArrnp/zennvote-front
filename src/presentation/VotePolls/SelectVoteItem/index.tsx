import React, { useState, useCallback } from 'react';
import ToggleImg from '../../../assets/image/bottom.png';

import * as S from './Styles';

interface SelectVoteItemProps {
    selectList: string[];
    selectedValue: string;
    selectedList: string[];
    handleChangeSetVoteList: (value: string) => void;
}

const SelectVoteItem = ({ selectList, selectedValue = "", selectedList=[] , handleChangeSetVoteList}: SelectVoteItemProps) => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const onClickToggleDropdown = useCallback(
        () => {
            setShowDropdown(!showDropdown);
            setSearchKeyword('');
        },
        [setShowDropdown, setSearchKeyword, showDropdown],
    )

    const handleClickDropdownItem = useCallback(
        (value) => {
            handleChangeSetVoteList(value);
            setShowDropdown(false);
        }, 
        [handleChangeSetVoteList, setShowDropdown],
    )

    return (
        <S.SelectVoteItemWrapper>
            <S.SelectVoteItemValueWrapper onClick={onClickToggleDropdown}>
                <S.SelectVoteItemValue>
                    {selectedValue}
                </S.SelectVoteItemValue>
                <S.SelectVoteItemToggleImg
                    src={ToggleImg}
                    alt='toggle'/>
            </S.SelectVoteItemValueWrapper>
            {
                    showDropdown && (           
                        <S.SelectVoteItemDropdown>
                            <S.SelectVoteItemSearch onChange={(e) => setSearchKeyword(e.target.value)} placeholder="검색어를 입력하세요."/>
                            <S.SelectVoteItemDropdownList>
                                {
                                    selectList.filter(v => v.indexOf(searchKeyword) !== -1 && selectedList.findIndex(value => value === v) === -1).map((selectValue: string) => (
                                        <S.SelectVoteItemDropdownItem key={selectValue} onClick={(e) => handleClickDropdownItem(selectValue)}>
                                            {selectValue}
                                        </S.SelectVoteItemDropdownItem>
                                    ))
                                }
                            </S.SelectVoteItemDropdownList>
                        </S.SelectVoteItemDropdown>
                    )
                }
        </S.SelectVoteItemWrapper>
    )
}

export default SelectVoteItem
