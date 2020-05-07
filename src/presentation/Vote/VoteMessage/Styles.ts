import styled from 'styled-components';

const innerWidth = 670;

interface VoteMessageButtonProps {
  isNext: boolean;
}

export const VoteMessageWrapper = styled.div`
  width: ${innerWidth}px;
  margin: 0 auto;
  padding-top: 36px;
  padding-bottom: 30px;
`
export const VoteMessageButtonWrapper = styled.div`
  display: flex;
  width: ${innerWidth}px;
  justify-content: space-between;
  margin: auto;
  margin-top: 30px;
`;

export const VoteMessageButton = styled.button`
  width: 48%;
  height: 50px;
  cursor: pointer;
  background-color: ${(props: VoteMessageButtonProps) => props.isNext ? "#333": "white"};
  color: ${(props: VoteMessageButtonProps) => props.isNext ? 'white': "#333"};
  border: ${(props: VoteMessageButtonProps) => props.isNext ? 'none': '1px solid #333'};
  font-size: 16px;
`;