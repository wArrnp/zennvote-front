import VoteData from "../entities/VoteData"

const initialState:VoteData = {

}

const SET_VOTE_INIT = 'vote/SET_VOTE_INIT'

export const setVoteInit = () => ({
  type: SET_VOTE_INIT,
})

export type VoteType = 
  ReturnType<typeof setVoteInit>

export default function reducer(state:VoteData = initialState, action:VoteType): VoteData {
  switch (action.type) {
    case SET_VOTE_INIT:
      return { ...initialState }
  
    default:
      return state
  }
}