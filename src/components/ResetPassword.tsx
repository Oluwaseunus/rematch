import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { AuthState } from '../pages/Auth';
import UserService from '../api/UserService';

interface ResetPasswordProps extends AuthState, RouteComponentProps {
  handleChange: HandleChange;
}

export default function ResetPassword({ history }: ResetPasswordProps) {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handlePasswordReset();
  }

  async function handlePasswordReset() {
    if (password === verifyPassword) {
      await UserService.resetPassword({ token, password });
      history.push('/auth');
    }
  }

  return (
    <div className='form__component reset'>
      <div className='form__header'>
        <div className='form__header-title'>Reset Password</div>
        <p className='form__header-text'>
          Enter the reset code sent to your email and your new password.
        </p>
      </div>
      <form className='form__form' onSubmit={handleSubmit}>
        <div className='form__input-group'>
          <label htmlFor='token' className='form__input-label'>
            <span>Reset token</span>
          </label>
          <input
            id='token'
            type='text'
            name='token'
            value={token}
            className='form__input-field'
            onChange={e => setToken(e.target.value)}
          />
        </div>

        <>
          <div className='form__input-group'>
            <label htmlFor='password' className='form__input-label'>
              <span>Password</span>
            </label>
            <input
              id='password'
              type='password'
              value={password}
              name='newPassword'
              className='form__input-field'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='form__input-group'>
            <label htmlFor='verifyPassword' className='form__input-label'>
              <span>Verify Password</span>
            </label>
            <input
              type='password'
              id='verifyPassword'
              name='verifyPassword'
              value={verifyPassword}
              className='form__input-field'
              onChange={e => setVerifyPassword(e.target.value)}
            />
          </div>
        </>

        <button type='submit' className='primary'>
          Reset Password
        </button>
      </form>
    </div>
  );
}
