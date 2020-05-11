import styled from 'styled-components';

export const VoteDumItemWrapper = styled.div`
    padding: 24px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.1);

    &:nth-of-type(1) {
        margin-top: 40px;
    }
`

export const VoteDumItemTop = styled.div`
    display: flex;
    margin-bottom: 16px;
`

export const VoteDumItemName = styled.span`
    width: 100%;
`
export const VoteDumItemContent = styled.span`
`
export const VoteDumItemDeleteButton = styled.button`
    background: white;
    border: 2px solid red;
    border-radius: 12px;
    height: 24px;
    width: 24px;
    color: red;
    font-weight: bold;
    line-height: 0px;
    font-size: 20px;
`

export const VoteDumEditWrapper = styled.div`
    padding: 20px 0;
    width: 100%;
`

export const VoteDumEditTop = styled.div`
    display: flex;
    align-items: center;
`

export const VoteDumEditEpisode = styled.div`
    width: 100%;
`

export const VoteDumEditShortField = styled.input`
    width: 100%;
    height: 36px;
    padding: 15px 10px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
`
export const VoteDumEditDescription = styled.span`
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
    margin-left: 16px;
`

export const VoteDumEditContent = styled.textarea`
    width: calc(100% - 20px);
    padding: 15px 10px;
    border: 1px solid #ddd;
    margin-top: 10px;
    resize: vertical;
`
