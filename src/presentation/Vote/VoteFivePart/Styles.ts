import styled from 'styled-components';

const innerWidth = '80%';

interface VoteFivePartButtonProps {
  isNext: boolean;
}

export const VoteFivePartWrapper = styled.div`
  width: ${innerWidth};
  margin: 0 auto;
  padding-top: 42px;
  padding-bottom: 30px;
`
export const VoteFivePartButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

export const VoteFivePartButton = styled.button`
  width: 48%;
  height: 50px;
  cursor: pointer;
  background-color: ${(props: VoteFivePartButtonProps) => props.isNext ? "#333": "white"};
  color: ${(props: VoteFivePartButtonProps) => props.isNext ? 'white': "#333"};
  border: ${(props: VoteFivePartButtonProps) => props.isNext ? 'none': '1px solid #333'};
  font-size: 16px;
`;