import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AuthState } from '../pages/Auth';

interface ResetProps extends Pick<AuthState, 'email'>, RouteComponentProps {
  handleChange: HandleChange;
  handleResetPassword: Function;
}

export default function ResetPassword({
  email,
  history,
  handleChange,
  handleResetPassword,
}: ResetProps) {
  function goToLogin() {
    history.push('/auth');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleResetPassword();
  }

  return (
    <div className='authentication__component reset'>
      <div className='authentication__header'>
        <h1 className='authentication__header-title'>Forgot Password</h1>
        <p className='authentication__header-text'>
          Please provide your registered email. Reset instructions will be sent
          to you.
        </p>
      </div>
      <form className='authentication__form' onSubmit={handleSubmit}>
        <div className='authentication__input-group'>
          <label htmlFor='email' className='authentication__input-label'>
            <span>Email</span>
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            className='authentication__input-field'
          />
        </div>

        <button type='submit' className='primary'>
          Send Instructions
        </button>

        <div className='authentication__remarks'>
          <p>
            <button type='button' className='secondary' onClick={goToLogin}>
              Back to login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
