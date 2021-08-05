import * as types from '../types/user';

const initialState: User | null = null;

export default function userReducer(
  state = initialState,
  action: types.UserActions
) {
  switch (action.type) {
    case types.AUTHENTICATED:
      return action.user;

    default:
      return state;
  }
}
