import { combineReducers } from 'redux';
import vote from './vote';
import VoteData from '../entity/VoteData';
import email from './email';
import quiz, { IQuiz } from './quiz';
import selectVote, { SelectVoteState } from './selectVote';

export interface StoreState {
  vote: VoteData,
  email: string,
  quiz: IQuiz,
  selectVote: SelectVoteState
}

export default combineReducers<StoreState>({
  vote,
  email,
  quiz,
  selectVote,
});