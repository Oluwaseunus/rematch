import axios from 'axios';
import { getHeaders, catchWrapper } from './utils';

export default class GameService {
  static instance = axios.create({
    baseURL: process.env.REACT_APP_GAME_SERVICE_URL,
  });

  static async getGames() {
    const response = await this.instance.get<APIResponse<Game[]>>('/games');
    const gameData = response.data.data;
    gameData.map(game => {
      const list = game.category.name.split(' ');
      if (list.length > 2) {
        game.category.name = list.map(word => word[0]).join('');
      }
      return game;
    });
    return response.data.data;
  }

  static async getUserGames() {
    try {
      const response = await this.instance.get<APIResponse<UserGame[]>>(
        '/userGames',
        {
          headers: getHeaders(),
        }
      );
      return response.data.data;
    } catch (err) {
      catchWrapper(err);
      return [];
    }
  }
}
