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
    <div className='form__component forgot'>
      <div className='form__header'>
        <h1 className='form__header-title'>Forgot Password</h1>
        <p className='form__header-text'>
          Please provide your registered email. Reset instructions will be sent
          to you.
        </p>
      </div>
      <form className='form__form' onSubmit={handleSubmit}>
        <div className='form__input-group'>
          <label htmlFor='email' className='form__input-label'>
            <span>Email</span>
          </label>
          <input
            required
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            className='form__input-field'
          />
        </div>

        <button type='submit' className='primary'>
          Send Instructions
        </button>

        <div className='form__remarks'>
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
