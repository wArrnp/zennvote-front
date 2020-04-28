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