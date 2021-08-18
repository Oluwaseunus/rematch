import axios from 'axios';
import { getHeaders, catchWrapper } from './utils';

export default class GameService {
  static instance = axios.create({
    baseURL: process.env.REACT_APP_GAME_SERVICE_URL,
  });

  static async getGames() {
    const response = await this.instance.get<APIResponse<Game[]>>('/games');
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
