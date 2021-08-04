import { useState } from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import Login from '../components/Login';
import Signup from '../components/Signup';
import ResetPassword from '../components/ResetPassword';
import PlayRematch from '../assets/images/PLAYREMATCH.png';

export interface AuthState {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  keepMeLoggedIn: boolean;
}

export default function Auth() {
  const [email] = useState('');
  const [username] = useState('');
  const [lastname] = useState('');
  const [password] = useState('');
  const [firstname] = useState('');
  const [keepMeLoggedIn] = useState(false);

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
                username={username}
                password={password}
                keepMeLoggedIn={keepMeLoggedIn}
              />
            )}
          />
          <Route
            path='/auth/signup'
            render={(props: RouteComponentProps) => (
              <Signup
                {...props}
                email={email}
                username={username}
                lastname={lastname}
                password={password}
                firstname={firstname}
              />
            )}
          />
          <Route
            path='/auth/reset'
            render={(props: RouteComponentProps) => (
              <ResetPassword {...props} email={email} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}
