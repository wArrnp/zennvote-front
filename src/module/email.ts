const initialState:string = '';

const SET_EMAIL = 'email/SET_EMAIL' as const;

export const setEmail = (email:string) => ({
  type: SET_EMAIL,
  email,
});

export type EmailActionType = 
  ReturnType<typeof setEmail>;

export default function reducer(state:string = initialState, action:EmailActionType): string {
  switch (action.type) {
    case SET_EMAIL:
      return action.email;
    default:
      return state;
  };
};