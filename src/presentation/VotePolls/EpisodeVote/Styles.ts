import styled from 'styled-components';

interface EpisodeVoteStatusProps {
  isError: boolean;
}

interface EpisodeVoteProducerProps {
  isOverlapped: boolean;
}

export const EpisodeVoteWrapper = styled.div`
  padding: 10px;
  text-align: right;
`

export const EpisodeVote = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0 14px 0;
  text-align: left;
`

export const EpisodeVoteInputWrapper = styled.span`
  margin-right: 15px;
`

export const EpisodeVoteInput = styled.input`
  padding: 10px 15px;
  width: 60px;
  margin-right: 5px;
`
export const EpisodeVoteStatus = styled.span`
  display: inline-flex;
  flex-direction: column;
  color: ${(props:EpisodeVoteStatusProps) => props.isError? "red": "black"}
`

export const EpisodeVoteProducer = styled.span`
  font-size: 12px;
  color: ${(props: EpisodeVoteProducerProps) => props.isOverlapped ? "red" : "grey"};
`

export const EpisodeVoteConfirm = styled.button`
  padding: 5px 7px;
  border: 1px solid #333;
  background-color: white;
`
