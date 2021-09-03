export const SET_CURRENT_GAME = 'SET_CURRENT_GAME';

interface SetCurrentGameAction {
  type: typeof SET_CURRENT_GAME;
  game: Game;
}

export type GameActions = SetCurrentGameAction;
