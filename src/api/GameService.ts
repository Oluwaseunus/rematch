import axios from 'axios';

export default class GameService {
  static instance = axios.create({
    baseURL: process.env.REACT_APP_GAME_SERVICE_URL,
  });

  static async getGames() {
    const response = await this.instance.get<APIResponse<Game[]>>('/games');
    return response.data.data;
  }
}
