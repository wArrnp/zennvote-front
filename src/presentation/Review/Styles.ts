import styled from 'styled-components';

const innerWidth = '80%';

interface ReviewButtonProps {
    isNext: boolean;
}

export const ReviewContainer = styled.div`
    padding-top: 42px;
    padding-bottom: 30px;
    margin: 0 auto;
`

export const ReviewContentContainer = styled.div`
    width: ${innerWidth};
    margin: 0 auto;
`

export const ReviewContentItemWrapper = styled.div`
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 5px;d
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 0 rgba(0,0,0,0.15);
`

export const ReviewContentItemTitle = styled.p`
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
`

export const ReviewContentItem = styled.div`
    padding-bottom: 10px;
    margin-bottom: 10px;
`

export const ReviewContentItemTop = styled.p`
    margin: 0;
`

export const ReviewContentItemBottom = styled.p`
    font-size: 12px;
    margin: 0;
    color: grey;
`
export const ReviewButtonWrapper = styled.div`
  display: flex;
  width: ${innerWidth};
  justify-content: space-between;
  margin: auto;
  margin-top: 30px;
`;

export const ReviewButton = styled.button`
  width: 48%;
  height: 50px;
  cursor: pointer;
  background-color: ${(props: ReviewButtonProps) => props.isNext ? "#333": "white"};
  color: ${(props: ReviewButtonProps) => props.isNext ? 'white': "#333"};
  border: ${(props: ReviewButtonProps) => props.isNext ? 'none': '1px solid #333'};
  font-size: 16px;
`;