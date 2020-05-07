import styled from 'styled-components';

export const VoteDumItemWrapper = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid grey;

    &:nth-last-of-type(1) {
        margin-bottom: 0;
    }
`

export const VoteDumEditWrapper = styled.div`
    padding: 20px 10px 10px 10px;
    border-top: 1px solid grey;
`

export const VoteDumEditTop = styled.input`
    width: 100%;
    padding: 15px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
`

export const VoteDumEditContent = styled.textarea`
    width: 100%;
    padding: 15px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    margin-top: 10px;
`