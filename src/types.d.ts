interface Activity {
  user: User;
  actionId: string;
  timestamp: number;
  type: 'friend request';
  status: 'read' | 'unread';
  action: 'sent' | 'accepted' | 'rejected';
}

interface APIResponse<T extends any> {
  data: T;
  status: string;
  message: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

interface Category {
  _id: string;
  name: string;
}

interface Challenge {
  gameTitle: string;
}

interface CommunityMember {
  _id: string;
  name: string;
  image: string;
}

interface Game {
  _id: string;
  name: string;
  image: string;
  categoryId: Category;
}

interface FriendRequest {
  _id: string;
  user1: User; // sender
  user2: User; // receiver
  created: string;
  status: 'pending' | 'accepted' | 'rejected';
}

interface Friendship extends Omit<FriendRequest, 'status'> {}

interface HandleChange {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface LastPlayed {
  image: string;
  title: string;
  level: number;
  points: number;
  played: number;
  ranking: string;
  winRatio: string;
  percentage: string;
}

interface LiveMatch {
  image: string;
  title: string;
  viewerCount: number;
  players: LiveMatchPlayer[];
}

interface LiveMatchPlayer {
  name: string;
  points: number;
  profileImg: string;
}

interface LoginRequest extends Pick<SignupRequest, 'username' | 'password'> {
  keepMeLoggedIn: boolean;
}

interface ResetPasswordRequest {
  token: string;
  password: string;
}

interface ScoreCard {
  game: string;
  score: string;
}

interface SignupRequest {
  email: string;
  lastName: string;
  password: string;
  username: string;
  firstName: string;
}

interface UpdateState<T extends object, K = keyof T> {
  (key: K, value: T[K]): void;
}

interface User {
  _id: string;
  email: string;
  image: string;
  lastName: string;
  username: string;
  firstName: string;
}

interface UserWithToken extends User {
  token: string;
}
