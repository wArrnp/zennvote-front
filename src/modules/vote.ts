import VoteData from "../entities/VoteData"

const initialState:VoteData = {

}

const SET_VOTE_INIT = 'vote/SET_VOTE_INIT' as const;

export const setVoteInit = () => ({
  type: SET_VOTE_INIT,
})

export type VoteActionType = 
  ReturnType<typeof setVoteInit>

export default function reducer(state:VoteData = initialState, action:VoteActionType): VoteData {
  switch (action.type) {
    case SET_VOTE_INIT:
      return { ...initialState }
  
    default:
      return state
  }
}