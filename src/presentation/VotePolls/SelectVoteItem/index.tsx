import React, { useState, useCallback } from 'react';
import ToggleImg from '../../../assets/image/bottom.png';

import * as S from './Styles';

interface SelectVoteItemProps {
    isShown: boolean;
    selectList: string[];
    selectedValue: string;
    selectedList: string[];
    onToggle: () => void;
    handleChangeSetVoteList: (value: string) => void;
}

const SelectVoteItem = ({ isShown, onToggle, selectList, selectedValue = "", selectedList=[] , handleChangeSetVoteList}: SelectVoteItemProps) => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");

    const onClickToggleDropdown = useCallback(
        () => {
            onToggle();
            setSearchKeyword('');
        },
        [onToggle, setSearchKeyword],
    )

    const handleClickDropdownItem = useCallback(
        (value) => {
            handleChangeSetVoteList(value);
            onToggle();
        }, 
        [handleChangeSetVoteList, onToggle],
    )

    const handleClickDropdownUnselect = () => {
        handleChangeSetVoteList('');
        onToggle();
    };

    return (
        <S.SelectVoteItemWrapper>
            <S.SelectVoteItemValueWrapper onClick={onClickToggleDropdown}>
                {
                    !!selectedValue ?
                    <S.SelectVoteItemValue>
                        { selectedValue }
                    </S.SelectVoteItemValue>
                    :
                    <S.SelectVoteItemValue>
                        <S.SelectVoteItemPlaceholder>
                            선택해주세요.
                        </S.SelectVoteItemPlaceholder>
                    </S.SelectVoteItemValue>
                }
                <S.SelectVoteItemToggleImg
                    src={ToggleImg}
                    alt='toggle'/>
            </S.SelectVoteItemValueWrapper>
            {
                    isShown && (           
                        <S.SelectVoteItemDropdown>
                            <S.SelectVoteItemSearch onChange={(e) => setSearchKeyword(e.target.value)} placeholder="검색어를 입력하세요."/>
                            <S.SelectVoteItemDropdownList>
                                <S.SelectVoteItemDropdownItem onClick={(e) => handleClickDropdownUnselect()}>
                                    선택 없음
                                </S.SelectVoteItemDropdownItem>
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
