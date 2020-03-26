import { combineReducers } from 'redux';
import vote from './vote';
import VoteData from '../entities/VoteData';

export interface StoreState {
  vote: VoteData
}

export default combineReducers<StoreState>({
  vote
})