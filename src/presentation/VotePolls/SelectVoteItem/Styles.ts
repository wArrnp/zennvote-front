import styled from 'styled-components';

export const SelectVoteItemWrapper = styled.div`
    box-sizing: border-box;    
    position: relative;

    * {
        box-sizing: border-box;    
    }
`

export const SelectVoteItemValueWrapper = styled.p`
    display: flex;
    width: 100%;
    border: 1px solid black;
    align-items: center;
`

export const SelectVoteItemValue = styled.span`
    display: inline-block;
    width: calc(100% - 31px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
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
    background-color: white;
    z-index: 2;
`

export const SelectVoteItemSearch = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 15px 5px;
    background-color: white;
    font-size: 16px;
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
    border-bottom: 1px solid black;
    
    &:nth-of-type(1) {
        border-top: none;
    }

    &:nth-last-of-type(1) {
        border-bottom: none;
    }
`