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
    <div className='authentication__component reset'>
      <div className='authentication__header'>
        <div className='authentication__header-title'>Reset Password</div>
        <p className='authentication__header-text'>
          Enter the reset code sent to your email and your new password.
        </p>
      </div>
      <form className='authentication__form' onSubmit={handleSubmit}>
        <div className='authentication__input-group'>
          <label htmlFor='token' className='authentication__input-label'>
            <span>Reset token</span>
          </label>
          <input
            id='token'
            type='text'
            name='token'
            value={token}
            className='authentication__input-field'
            onChange={e => setToken(e.target.value)}
          />
        </div>

        <>
          <div className='authentication__input-group'>
            <label htmlFor='password' className='authentication__input-label'>
              <span>Password</span>
            </label>
            <input
              id='password'
              type='password'
              value={password}
              name='newPassword'
              className='authentication__input-field'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='authentication__input-group'>
            <label
              htmlFor='verifyPassword'
              className='authentication__input-label'
            >
              <span>Verify Password</span>
            </label>
            <input
              type='password'
              id='verifyPassword'
              name='verifyPassword'
              value={verifyPassword}
              className='authentication__input-field'
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
