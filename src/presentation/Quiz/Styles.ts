import styled from 'styled-components';

const innerWidth = 670;

interface QuizButtonProps {
  isNext: boolean
}

export const QuizWrapper = styled.div`
  padding-top: 36px;
  padding-bottom: 30px;
  margin: 0 auto;
  position: relative;
`

export const QuizContentWrapper = styled.div`
  width: ${innerWidth}px;
  margin: 0 auto;
`
export const QuizButtonWrapper = styled.div`
  display: flex;
  width: ${innerWidth}px;
  justify-content: space-between;
  margin: auto;
  margin-top: 30px;
`

export const QuizButton = styled.button`
  width: 48%;
  height: 50px;
  cursor: pointer;
  background-color: ${(props: QuizButtonProps) => props.isNext ? "#333": "white"};
  color: ${(props: QuizButtonProps) => props.isNext ? 'white': "#333"};
  border: ${(props: QuizButtonProps) => props.isNext ? 'none': '1px solid #333'};
  font-size: 16px;
`