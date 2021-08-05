export const AUTHENTICATED = 'AUTHENTICATED';

interface AuthenticatedAction {
  type: typeof AUTHENTICATED;
  user: User;
}

export type UserActions = AuthenticatedAction;
