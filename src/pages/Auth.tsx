import { ReactElement, useState } from 'react';

import Login from '../components/Login';
import Signup from '../components/Signup';
import PlayRematch from '../assets/images/PLAYREMATCH.png';

export enum AuthActions {
  login,
  reset,
  signUp,
}

export interface AuthState {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  keepMeLoggedIn: boolean;
}

type ResetProps = Pick<AuthState, 'email'>;

function Reset({ email }: ResetProps) {
  console.log({ email });
  return null;
}

export default function Auth() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
  const [action, setAction] = useState<AuthActions>(AuthActions.login);

  let renderComponent: ReactElement | null = null;

  switch (action) {
    case AuthActions.login:
      renderComponent = (
        <Login
          username={username}
          password={password}
          setAction={setAction}
          keepMeLoggedIn={keepMeLoggedIn}
        />
      );
      break;

    case AuthActions.reset:
      renderComponent = <Reset email={email} />;
      break;

    case AuthActions.signUp:
      renderComponent = (
        <Signup
          email={email}
          username={username}
          lastname={lastname}
          password={password}
          firstname={firstname}
          setAction={setAction}
        />
      );
      break;

    default:
      break;
  }

  return (
    <div className='auth-page'>
      <div className='hero'>
        <img src={PlayRematch} alt='PlayRematch' />
      </div>
      <div className='authentication'>{renderComponent}</div>
    </div>
  );
}
