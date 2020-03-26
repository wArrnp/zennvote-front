const initialState:string = ''

const SET_EMAIL = 'email/SET_EMAIL'

export const setEmail = (email:string) => ({
  type: SET_EMAIL,
  email
})

export type EmailType = 
  ReturnType<typeof setEmail>

export default function reducer(state:string = initialState, action:EmailType): string {
  switch (action.type) {
    case SET_EMAIL:
      return action.email
    default:
      return state
  }
}