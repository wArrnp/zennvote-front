import { combineReducers } from 'redux';
import vote from './vote';
import VoteData from '../entities/VoteData';
import email from './email';
import quiz, { IQuiz } from './quiz';

export interface StoreState {
  vote: VoteData,
  email: string,
  quiz: IQuiz
}

export default combineReducers<StoreState>({
  vote,
  email,
  quiz
})