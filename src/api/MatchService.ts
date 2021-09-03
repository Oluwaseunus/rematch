import axios from 'axios';
import { getHeaders, catchWrapper } from './utils';

export default class MatchService {
  static instance = axios.create({
    baseURL: process.env.REACT_APP_MATCH_SERVICE_URL,
  });

  static async challengeUser(body: ChallengeUserRequest) {
    try {
      const { data } = await this.instance.post<
        APIResponse<ChallengeUserResponse>
      >('/challenges', body, { headers: getHeaders() });
      return data;
    } catch (err) {
      catchWrapper(err);
    }
  }
}
