export const AUTHENTICATED = 'AUTHENTICATED';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';

interface AuthenticatedAction {
  type: typeof AUTHENTICATED;
  user: User;
}

interface UnauthenticatedAction {
  type: typeof UNAUTHENTICATED;
}

export type UserActions = AuthenticatedAction | UnauthenticatedAction;
