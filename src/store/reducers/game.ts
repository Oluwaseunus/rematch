import * as types from '../types/game';

interface GameState {
  activeGame: Game;
}

const initialState: GameState = {
  activeGame: {} as Game,
};

const gameReducer = (state = initialState, action: types.GameActions) => {
  switch (action.type) {
    case types.SET_CURRENT_GAME:
      return {
        ...state,
        activeGame: action.game,
      };

    default:
      return state;
  }
};

export default gameReducer;
