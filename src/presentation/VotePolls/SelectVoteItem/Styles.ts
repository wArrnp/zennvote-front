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
    height: 40px;
    border-bottom: 1px solid black;
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

export const SelectVoteItemPlaceholder = styled.span`
    color: gray;
`

export const SelectVoteItemToggleImg = styled.img`
    width: 40px;
    height: 30px;
    padding: 5px 10px;
    cursor: pointer;
    box-sizing: border-box;
`

export const SelectVoteItemDropdown = styled.div`
    position: absolute;
    width: 100%;
    top: 120%;
    background-color: white;
    border-radius: 4px;
    z-index: 2;
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.1);
    padding-bottom: 8px;
`

export const SelectVoteItemSearch = styled.input`
    width: calc(100% - 20px);
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid black;
    padding: 10px 15px;
    background-color: transparent;
    margin: 14px 10px;
    font-size: 16px;
    color: black;
    &::placeholder {
        color: lightgray;
    }
    &:focus {
        outline: none;
    }
`

export const SelectVoteItemDropdownList = styled.div`
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    border-top: none;
    background-color: transparent;
`

export const SelectVoteItemDropdownItem = styled.p`
    width: 100%;
    color: black;
    box-sizing: border-box;
    padding: 10px 15px;
    margin: 0;
    &:hover {
        background-color: lightgray;
    }
`