import React from 'react';
import QuizData from '../../entity/QuizData';

import * as S from './Styles';

interface QuizItemProps extends QuizData {
  index: number;
  selectedIndex:number;
  handleQuizSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuizItem = ({ index, title, contents: choices, selectedIndex, handleQuizSelect }: QuizItemProps) => {
  return (
    <S.QuizItemWrapper>
      <S.QuizItemTitle>
        {index+1}. {title}
      </S.QuizItemTitle>
      {
        choices.map((choice, index) => (
          <S.QuizItemLabel key={`${choice}-${index}`}>
            <S.QuizItemRadioButton 
              type="radio" 
              name={title} 
              value={index + 1} 
              onChange={(e) => handleQuizSelect(e)}
              checked={selectedIndex === (index + 1)} />
            {choice}
          </S.QuizItemLabel>
        ))
      }
    </S.QuizItemWrapper>
  );
};

export default QuizItem;