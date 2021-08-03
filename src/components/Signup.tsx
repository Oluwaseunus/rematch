import { AuthActions, AuthState } from '../pages/Auth';

interface SignupProps extends Omit<AuthState, 'keepMeLoggedIn'> {
  setAction: (action: AuthActions) => void;
}

export default function Signup({
  email,
  username,
  lastname,
  password,
  firstname,
  setAction,
}: SignupProps) {
  function goToLogin() {
    setAction(AuthActions.login);
  }

  return (
    <div className='authentication__component login'>
      <div className='authentication__header'>
        <h1 className='authentication__header-title'>Create an Account</h1>
      </div>
      <form className='authentication__form'>
        <div className='authentication__horizontal-group'>
          <div className='authentication__input-group'>
            <label htmlFor='firstname' className='authentication__input-label'>
              <span>Firstname</span>
            </label>
            <input
              type='text'
              id='firstname'
              className='authentication__input-field'
            />
          </div>
          <div className='authentication__input-group'>
            <label htmlFor='lastname' className='authentication__input-label'>
              <span>Lastname</span>
            </label>
            <input
              type='text'
              id='lastname'
              className='authentication__input-field'
            />
          </div>
        </div>
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
          <label htmlFor='email' className='authentication__input-label'>
            <span>Email</span>
          </label>
          <input
            id='email'
            type='email'
            className='authentication__input-field'
          />
        </div>
        <div className='authentication__input-group'>
          <label htmlFor='password' className='authentication__input-label'>
            <span>Password</span>
          </label>
          <input
            id='password'
            type='password'
            className='authentication__input-field'
          />
        </div>

        <button type='submit' className='primary'>
          Create Account
        </button>

        <div className='authentication__remarks'>
          <p>
            Already a user?{' '}
            <button type='button' className='secondary' onClick={goToLogin}>
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
