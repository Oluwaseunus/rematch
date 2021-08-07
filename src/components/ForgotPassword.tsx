import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { AuthState } from '../pages/Auth';

interface ForgotPasswordProps
  extends Pick<AuthState, 'email'>,
    RouteComponentProps {
  handleChange: HandleChange;
  getPasswordToken: Function;
}

export default function ForgotPassword({
  email,
  history,
  handleChange,
  getPasswordToken,
}: ForgotPasswordProps) {
  function goToLogin() {
    history.push('/auth');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await getPasswordToken();
    history.push('/auth/reset');
  }

  return (
    <div className='authentication__component forgot'>
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
            required
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
