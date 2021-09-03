import { Dispatch } from 'redux';

import { store } from '../index';
import * as types from '../types/game';

export default class GameActionsCreator {
  static dispatch: Dispatch<types.GameActions> = store.dispatch;

  static setCurrentGame(game: Game) {
    this.dispatch({
      type: types.SET_CURRENT_GAME,
      game,
    });
  }
}
