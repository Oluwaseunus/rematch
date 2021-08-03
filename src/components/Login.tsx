import { RouteComponentProps } from 'react-router-dom';
import { AuthState } from '../pages/Auth';

interface LoginProps
  extends Pick<AuthState, 'username' | 'password' | 'keepMeLoggedIn'>,
    RouteComponentProps {}

export default function Login({
  history,
  username,
  password,
  keepMeLoggedIn,
}: LoginProps) {
  function goToSignup() {
    history.push('/auth/signup');
  }

  function goToReset() {
    history.push('/auth/reset');
  }

  return (
    <div className='authentication__component login'>
      <div className='authentication__header'>
        <p className='authentication__header-text'>Welcome Back</p>
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
            <button
              type='button'
              onClick={goToReset}
              className='authentication__nav-button'
            >
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
            checked={keepMeLoggedIn}
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
            <button type='button' className='secondary' onClick={goToSignup}>
              Create an account
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
