import styled from 'styled-components';

export const SelectVoteItemWrapper = styled.div`
    position: relative;
`

export const SelectVoteItemValueWrapper = styled.p`
    display: flex;
    width: 300px;
    border: 1px solid black;
`

export const SelectVoteItemValue = styled.span`
    display: inline-block;
    width: calc(100% - 31px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const SelectVoteItemToggleImg = styled.img`
    width: 30px;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    border-left: 1px solid black;
    box-sizing: border-box;
`

export const SelectVoteItemDropdown = styled.div`
    position: absolute;
    width: 100%;
    top: 100%;
`

export const SelectVoteItemSearch = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 10px 5px;
    background-color: white;
`

export const SelectVoteItemDropdownList = styled.div`
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid black;
    border-top: none;
    background-color: white;
`

export const SelectVoteItemDropdownItem = styled.p`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 5px;
    margin: 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    
    &:nth-of-type(1) {
        border-top: none;
    }

    &:nth-last-of-type(1) {
        border-bottom: none;
    }
`