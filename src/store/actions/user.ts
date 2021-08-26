import { Dispatch } from 'redux';

import { store } from '../index';
import * as types from '../types/user';

export default class UserActionsCreator {
  static dispatch: Dispatch<types.UserActions> = store.dispatch;

  static authenticate({ user, token }: AuthResponse) {
    localStorage.setItem('token', token);
    this.dispatch({
      type: types.AUTHENTICATED,
      user,
    });
  }

  static unauthenticate() {
    localStorage.removeItem('token');
    this.dispatch({
      type: types.UNAUTHENTICATED,
    });
  }
}
