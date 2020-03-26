import { combineReducers } from 'redux';
import vote from './vote';
import VoteData from '../entities/VoteData';
import email from './email'

export interface StoreState {
  vote: VoteData,
  email: string
}

export default combineReducers<StoreState>({
  vote,
  email
})