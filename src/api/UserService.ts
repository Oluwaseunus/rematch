import axios from 'axios';

function handleSuccessfulAuth(response: UserWithToken) {
  const { token, ...user } = response;
  return { user, token };
}

export default class UserService {
  static instance = axios.create({
    baseURL: process.env.REACT_APP_USER_SERVICE_URL,
  });

  static async fetchUserWithToken() {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await this.instance.get<APIResponse<User>>('/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return handleSuccessfulAuth(
          Object.assign(response.data.data, { token })
        );
      } else throw new Error('No token');
    } catch (err) {
      localStorage.removeItem('token');
      if (!window.location.pathname.includes('/auth')) {
        window.location.href = `${window.location.origin}/auth?redirectTo=${window.location.pathname}`;
      }
    }
  }

  static async login(body: LoginRequest): Promise<AuthResponse> {
    const response = await this.instance.post<APIResponse<UserWithToken>>(
      '/auth',
      body
    );
    return handleSuccessfulAuth(response.data.data);
  }

  static async signup(body: SignupRequest): Promise<AuthResponse> {
    const response = await this.instance.post<APIResponse<UserWithToken>>(
      '/users',
      body
    );
    return handleSuccessfulAuth(response.data.data);
  }
}
