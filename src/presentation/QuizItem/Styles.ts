import styled from 'styled-components';

const checkedColor = "#3C9870"

export const QuizItemWrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
`;

export const QuizItemTitle = styled.p`
  font-size: 20px;
  margin: 0;
  margin-bottom: 25px;
`;

export const QuizItemLabel = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-bottom: 10px;
`;

export const QuizItemRadioButton = styled.input`
  margin: 0 10px 0 0;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: white;
  outline: none;
  border: 1px solid grey;

  &:checked {
    appearance: none;
    background-color: ${checkedColor};
    border: none;
  }
`;