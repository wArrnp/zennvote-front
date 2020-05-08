import styled from 'styled-components';

const innerWidth = '80%';

interface VoteCustomButtonProps {
  isNext: boolean;
}

export const VoteCustomWrapper = styled.div`
  width: ${innerWidth};
  margin: 0 auto;
  padding-top: 36px;
  padding-bottom: 30px;
`
export const VoteCustomButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: auto;
  margin-top: 30px;
`;

export const VoteCustomButton = styled.button`
  width: 48%;
  height: 50px;
  cursor: pointer;
  background-color: ${(props: VoteCustomButtonProps) => props.isNext ? "#333": "white"};
  color: ${(props: VoteCustomButtonProps) => props.isNext ? 'white': "#333"};
  border: ${(props: VoteCustomButtonProps) => props.isNext ? 'none': '1px solid #333'};
  font-size: 16px;
`;