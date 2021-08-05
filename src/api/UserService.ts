import axios from 'axios';

export default class UserService {
  static instance = axios.create({
    baseURL: process.env.REACT_APP_USER_SERVICE_URL,
  });

  static async login(body: LoginRequest): Promise<AuthResponse> {
    const {
      data: { data },
    } = await this.instance.post<APIResponse<UserWithToken>>('/auth', body);
    const { token, ...user } = data;
    return { user, token };
  }

  static async signup(body: SignupRequest): Promise<AuthResponse> {
    const {
      data: { data },
    } = await this.instance.post<APIResponse<UserWithToken>>('/users', body);
    const { token, ...user } = data;
    return { user, token };
  }
}
