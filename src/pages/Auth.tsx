import { ReactElement, useState } from 'react';
import PlayRematch from '../assets/images/PLAYREMATCH.png';

enum AuthActions {
  login,
  reset,
  signUp,
}

interface AuthState {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  keepMeLoggedIn: boolean;
}

type ResetProps = Pick<AuthState, 'email'>;
type LoginProps = Pick<AuthState, 'username' | 'password' | 'keepMeLoggedIn'>;

function Login({ username, password, keepMeLoggedIn }: LoginProps) {
  console.log({ username, password });
  return (
    <div className='authentication__component login'>
      <div className='authentication__header'>
        <h1 className='authentication__header-title'>Login to PlayRematch</h1>
      </div>
      <form className='authentication__form'>
        <div className='authentication__input-group'>
          <label htmlFor='username' className='authentication__input-label'>
            <span>Username</span>
          </label>
          <input
            type='text'
            id='username'
            className='authentication__input-field'
          />
        </div>
        <div className='authentication__input-group'>
          <label htmlFor='password' className='authentication__input-label'>
            <span>Password</span>
            <button type='button' className='authentication__nav-button'>
              Forgot Password
            </button>
          </label>
          <input
            id='password'
            type='password'
            className='authentication__input-field'
          />
        </div>
        <div className='authentication__input-group row'>
          <input
            type='checkbox'
            id='keepMeLoggedIn'
            name='keepMeLoggedIn'
            className='authentication__input-field'
          />
          <label
            htmlFor='keepMeLoggedIn'
            className='authentication__input-label'
          >
            Keep me logged in
          </label>
        </div>

        <button type='submit' className='primary'>
          Login
        </button>

        <div className='authentication__remarks'>
          <p>
            New user?{' '}
            <button type='button' className='secondary'>
              Create an account
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

function Reset({ email }: ResetProps) {
  console.log({ email });
  return null;
}

function Signup({ email, username, lastname, password, firstname }: AuthState) {
  console.log({ email, username, lastname, password, firstname });
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
          keepMeLoggedIn={keepMeLoggedIn}
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
