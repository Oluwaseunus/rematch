import { useState } from 'react';
import {
  Route,
  Switch,
  useHistory,
  RouteComponentProps,
} from 'react-router-dom';

import Login from '../components/Login';
import Signup from '../components/Signup';
import UserService from '../api/UserService';
import ResetPassword from '../components/ResetPassword';
import PlayRematch from '../assets/images/PLAYREMATCH.png';
import UserActionsCreator from '../store/actions/user';

export interface AuthState extends SignupRequest {
  keepMeLoggedIn: boolean;
}

export default function Auth() {
  const history = useHistory();
  const [state, setState] = useState<AuthState>({
    email: 'christdam55@gmail.com',
    username: 'christoph',
    lastName: 'Wuni',
    password: 'Password@123',
    firstName: 'Christopher',
    keepMeLoggedIn: false,
  });

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
    history.push('/app/dashboard');
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
    history.push('/app/dashboard');
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
            path='/auth/reset'
            render={(props: RouteComponentProps) => (
              <ResetPassword {...props} {...state} updateState={updateState} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}
