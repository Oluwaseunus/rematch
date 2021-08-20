import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AuthState } from '../pages/Auth';

interface SignupProps
  extends Omit<AuthState, 'keepMeLoggedIn'>,
    RouteComponentProps {
  handleSignup: Function;
  handleChange: HandleChange;
}

export default function Signup({
  email,
  history,
  username,
  lastName,
  password,
  firstName,
  handleChange,
  handleSignup,
}: SignupProps) {
  function goToLogin() {
    history.push('/auth');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSignup();
  }

  return (
    <div className='form__component signup'>
      <div className='form__header'>
        <h1 className='form__header-title'>Create an Account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form__horizontal-group'>
          <div className='form__input-group'>
            <label htmlFor='firstName' className='form__input-label'>
              <span>Firstname</span>
            </label>
            <input
              required
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={handleChange}
              className='form__input-field'
            />
          </div>
          <div className='form__input-group'>
            <label htmlFor='lastName' className='form__input-label'>
              <span>Lastname</span>
            </label>
            <input
              required
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={handleChange}
              className='form__input-field'
            />
          </div>
        </div>
        <div className='form__input-group'>
          <label htmlFor='username' className='form__input-label'>
            <span>Username</span>
          </label>
          <input
            required
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={handleChange}
            className='form__input-field'
          />
        </div>
        <div className='form__input-group'>
          <label htmlFor='email' className='form__input-label'>
            <span>Email</span>
          </label>
          <input
            required
            id='email'
            name='email'
            type='email'
            value={email}
            onChange={handleChange}
            className='form__input-field'
          />
        </div>
        <div className='form__input-group'>
          <label htmlFor='password' className='form__input-label'>
            <span>Password</span>
          </label>
          <input
            required
            id='password'
            minLength={6}
            name='password'
            type='password'
            value={password}
            onChange={handleChange}
            className='form__input-field'
          />
        </div>

        <button type='submit' className='primary'>
          Create Account
        </button>

        <div className='form__remarks'>
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
