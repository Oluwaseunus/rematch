import axios from 'axios';
import { getHeaders, catchWrapper } from './utils';

interface FriendRequestBody {
  page?: number;
  limit?: number;
  type: 'received' | 'sent';
  status: FriendRequest['status'];
}

function handleSuccessfulAuth(response: UserWithToken) {
  const { token, ...user } = response;
  return { user, token };
}

export default class UserService {
  static instance = axios.create({
    baseURL: process.env.REACT_APP_USER_SERVICE_URL,
  });

  static async cancelFriendRequest(requestId: string) {
    try {
      await this.instance.delete(`/friendRequests/${requestId}`, {
        headers: getHeaders(),
      });
    } catch (err) {
      catchWrapper(err);
    }
  }

  static async fetchFriendRequests({
    type,
    status,
    page = 1,
    limit = 50,
  }: FriendRequestBody): Promise<FriendRequest[]> {
    try {
      const queryString = new URLSearchParams();
      queryString.set('type', type);
      queryString.set('status', status);
      queryString.set('page', String(page));
      queryString.set('limit', String(limit));

      const response = await this.instance.get<APIResponse<FriendRequest[]>>(
        `/friendRequests?${queryString.toString()}`,
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
      const { pathname } = window.location;

      if (pathname.length > 1 && !pathname.includes('/auth')) {
        window.location.href = `${window.location.origin}/auth?redirectTo=${pathname}`;
      }
    }
  }

  static async getPasswordResetToken(email: string) {
    const response = await this.instance.post<APIResponse<null>>(`/token`, {
      email,
    });
    return response.data.message;
  }

  static async login(body: LoginRequest): Promise<AuthResponse> {
    const response = await this.instance.post<APIResponse<UserWithToken>>(
      '/auth',
      body
    );
    return handleSuccessfulAuth(response.data.data);
  }

  static async resetPassword(body: ResetPasswordRequest) {
    const response = await this.instance.post('/password/reset', body);
    return response.data;
  }

  static async signup(body: SignupRequest): Promise<AuthResponse> {
    const response = await this.instance.post<APIResponse<UserWithToken>>(
      '/users',
      body
    );
    return handleSuccessfulAuth(response.data.data);
  }

  static async updateFriendRequest(
    requestId: string,
    status: 'accept' | 'reject'
  ) {
    try {
      await this.instance.put(
        `/friendRequests/${requestId}`,
        { status },
        {
          headers: getHeaders(),
        }
      );
    } catch (err) {
      catchWrapper(err);
    }
  }
}
