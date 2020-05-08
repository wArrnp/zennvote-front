import styled from 'styled-components';

export const CustomVoteItemWrapper = styled.div`
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;

    &:nth-of-type(1) {
        margin-top: 40px;
    }
`

export const CustomVoteItemEpisode = styled.span`
    width: 80px;
`
export const CustomVoteItemContent = styled.span`
    flex-grow: 1;
    margin: 0 16px;
`
export const CustomVoteItemDeleteButton = styled.button`
    background: white;
    border: 2px solid red;
    border-radius: 12px;
    height: 24px;
    width: 24px;
    color: red;
    font-weight: bold;
    font-size: 14px;
`

export const CustomVoteEditWrapper = styled.div`
    padding: 20px 0;
    width: 100%;
`

export const CustomVoteEditTop = styled.div`
    display: flex;
    align-items: center;
`

export const CustomVoteEditEpisode = styled.div`
    width: 100%;
`

export const CustomVoteEditShortField = styled.input`
    width: 80px;
    height: 36px;
    padding: 15px 10px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
`
export const CustomVoteEditDescription = styled.span`
    margin: 0 10px;
`

export const CustomVoteItemAddButton = styled.button`
    line-height: 0px;
    background: white;
    border: 2px solid #3C9870;
    border-radius: 18px;
    height: 36px;
    width: 36px;
    color: #3C9870;
    font-weight: bold;
    font-size: 26px;
`

export const CustomVoteEditContent = styled.input`
    width: calc(100% - 20px);
    padding: 15px 10px;
    border: 1px solid #ddd;
    margin-top: 10px;
`