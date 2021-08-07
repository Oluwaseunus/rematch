import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  RouteComponentProps,
} from 'react-router-dom';

import { RootState } from '../store';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { getRedirectUrl } from '../utils';
import UserService from '../api/UserService';
import UserActionsCreator from '../store/actions/user';
import ResetPassword from '../components/ResetPassword';
import ForgotPassword from '../components/ForgotPassword';
import PlayRematch from '../assets/images/PLAYREMATCH.png';

export interface AuthState extends SignupRequest {
  keepMeLoggedIn: boolean;
}

export default function Auth() {
  const history = useHistory();
  const redirectUrl = getRedirectUrl();
  const userExists = useSelector((state: RootState) => !!state.user);

  const [state, setState] = useState<AuthState>({
    email: '',
    username: '',
    lastName: '',
    password: '',
    firstName: '',
    keepMeLoggedIn: false,
  });

  if (userExists) return <Redirect to={redirectUrl} />;

  function updateState(
    key: keyof AuthState,
    value: AuthState[keyof AuthState]
  ) {
    setState({
      ...state,
      [key]: value,
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { type, name, value, checked } = e.target;
    updateState(name as keyof AuthState, type === 'checkbox' ? checked : value);
  }

  async function handleLogin() {
    const { username, password, keepMeLoggedIn } = state;
    const { user, token } = await UserService.login({
      username,
      password,
      keepMeLoggedIn,
    });

    UserActionsCreator.authenticate({ user, token });
    history.push(redirectUrl);
  }

  async function handleSignup() {
    const { email, username, password, lastName, firstName } = state;

    const { user, token } = await UserService.signup({
      email,
      username,
      password,
      lastName,
      firstName,
    });

    UserActionsCreator.authenticate({ user, token });
    history.push(redirectUrl);
  }

  async function getPasswordToken() {
    const { email } = state;
    await UserService.getPasswordResetToken(email);
  }

  return (
    <div className='auth-page'>
      <div className='hero'>
        <img src={PlayRematch} alt='PlayRematch' />
      </div>
      <div className='authentication'>
        <Switch>
          <Route
            exact
            path='/auth'
            render={(props: RouteComponentProps) => (
              <Login
                {...props}
                {...state}
                handleLogin={handleLogin}
                handleChange={handleChange}
              />
            )}
          />
          <Route
            path='/auth/signup'
            render={(props: RouteComponentProps) => (
              <Signup
                {...props}
                {...state}
                handleChange={handleChange}
                handleSignup={handleSignup}
              />
            )}
          />
          <Route
            path='/auth/forgot'
            render={(props: RouteComponentProps) => (
              <ForgotPassword
                {...props}
                {...state}
                handleChange={handleChange}
                getPasswordToken={getPasswordToken}
              />
            )}
          />
          <Route
            path='/auth/reset'
            render={(props: RouteComponentProps) => (
              <ResetPassword
                {...props}
                {...state}
                handleChange={handleChange}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}
