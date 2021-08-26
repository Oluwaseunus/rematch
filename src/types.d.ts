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
  category: Category;
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
  ranking: string;
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

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

interface PaginatedAPIResponse extends APIResponse {
  page: number;
  limit: number;
  length: number;
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

interface UserGame {
  game: Game;
  user: User;
}

interface UserWithToken extends User {
  token: string;
}
