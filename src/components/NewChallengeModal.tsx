import moment from 'moment';
import 'moment/locale/en-gb';
import Modal from 'react-modal';
import DateTime from 'react-datetime';
import React, { useState } from 'react';
import Fikayo from '../assets/images/Fikayo.png';
import { ReactComponent as CloseIcon } from '../assets/svgs/close.svg';
import { ReactComponent as LeftArrowIcon } from '../assets/svgs/arrowLeft.svg';

interface NewChallengeModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export default function NewChallengeModal({
  showModal,
  closeModal,
}: NewChallengeModalProps) {
  const yesterday = moment().subtract(1, 'day');

  const [index, setIndex] = useState(1);
  const [opponent, setOpponent] = useState('');
  const [selected, setSelected] = useState('');
  const [opponentType, setOpponentType] = useState('');
  const [date, setDate] = useState<string | moment.Moment>(moment());

  const customStyles: { content: React.CSSProperties } = {
    content: {
      zIndex: 1,
      top: '50%',
      padding: 0,
      left: '50%',
      width: '83.3rem',
      borderRadius: '2.4rem',
      backgroundColor: '#fff',
      transform: 'translate(-50%, -50%)',
      height: index === 3 ? '80rem' : '57.8rem',
    },
  };

  function createChallenge(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (moment(date).isAfter(moment())) {
      setIndex(index + 1);
    }
  }

  function handleBackButton() {
    if (opponentType === 'random') {
      setIndex(1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleTypeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let increment = 1;

    if (opponentType === 'random') {
      increment++;
    }

    setIndex(index + increment);
  }

  function handleOpponentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setOpponentType(e.target.value);
  }

  function toggleSelection(id: string) {
    if (selected === id) setSelected('');
    else setSelected(id);
  }

  const firstPage = (
    <>
      <p className='new__challenge-content-title'>
        Who would you like to face?
      </p>
      <form
        onSubmit={handleTypeSubmit}
        className='new__challenge-content-radios'
      >
        <div
          className='new__challenge-content-radio-group'
          onClick={() => setOpponentType('particular')}
        >
          <div className='new__challenge-content-radio'>
            <input
              required
              type='radio'
              id='particular'
              name='opponentType'
              onChange={handleOpponentChange}
              checked={opponentType === 'particular'}
            />
            <div className='checkmark'></div>
          </div>
          <label htmlFor='particular'>A particular opponent</label>
        </div>

        <div
          onClick={() => setOpponentType('random')}
          className='new__challenge-content-radio-group'
        >
          <div className='new__challenge-content-radio'>
            <input
              required
              id='random'
              type='radio'
              name='opponentType'
              onChange={handleOpponentChange}
              checked={opponentType === 'random'}
            />
            <span className='checkmark'></span>
          </div>
          <label htmlFor='random'>A random opponent</label>
        </div>

        <button type='submit' className='primary'>
          Continue
        </button>
      </form>
    </>
  );

  const secondPage = (
    <>
      <p className='new__challenge-content-title'>Choose your opponent</p>
      <div className='new__challenge-opponent-search'>
        <input
          type='text'
          name='opponent'
          value={opponent}
          placeholder='Username'
          onChange={e => setOpponent(e.target.value)}
        />
      </div>
      <ul className='new__challenge-opponent-list'>
        <li
          onClick={() => toggleSelection('id')}
          className={`new__challenge-opponent-item ${
            selected === 'id' ? 'selected' : ''
          }`}
        >
          <div className='new__challenge-opponent-image'>
            <img src={Fikayo} alt='Fikayo' />
          </div>
          <div className='new__challenge-opponent-details'>
            <p className='new__challenge-opponent-fullname'>Ashbark Letty</p>
            <p className='new__challenge-opponent-username'>
              @ashbarklettyliveson
            </p>
          </div>
        </li>
      </ul>
      <button
        className='primary'
        onClick={() => selected && setIndex(index + 1)}
      >
        Continue
      </button>
    </>
  );

  const thirdPage = (
    <>
      <p className='new__challenge-content-title'>Challenge Details</p>
      <form onSubmit={createChallenge}>
        <div className='form__input-group'>
          <label htmlFor='points' className='form__input-label'>
            <span>How many points will you like to stake?</span>
          </label>
          <input
            required
            id='points'
            type='number'
            name='points'
            className='form__input-field'
          />
        </div>
        <div className='form__horizontal-group'>
          <div className='form__input-group date'>
            <label htmlFor='username' className='form__input-label'>
              <span>Date</span>
            </label>
            <DateTime
              value={date}
              timeFormat={false}
              onChange={date => setDate(date)}
              isValidDate={current => current.isAfter(yesterday)}
              inputProps={{ className: 'form__input-field', required: true }}
            />
          </div>
          <div className='form__input-group'>
            <label htmlFor='username' className='form__input-label'>
              <span>Time</span>
            </label>
            <DateTime
              value={date}
              dateFormat={false}
              timeFormat='h:mm A'
              onChange={date => setDate(date)}
              isValidDate={current => current.isAfter(Date.now())}
              inputProps={{ className: 'form__input-field', required: true }}
            />
          </div>
        </div>
        <p className='game__settings'>Game Settings</p>
        <div className='form__input-group'>
          <label htmlFor='duration' className='form__input-label'>
            Gameplay Duration
          </label>
          <select
            required
            id='duration'
            name='duration'
            className='form__input-field'
          >
            <option value='' disabled selected>
              Select the duration of the match
            </option>
            <option value='5'>5 minutes</option>
          </select>
        </div>
        <div className='form__input-group'>
          <label htmlFor='points' className='form__input-label'>
            <span>FUT ID</span>
          </label>
          <input
            required
            type='text'
            id='fut-id'
            name='fut-id'
            className='form__input-field'
          />
        </div>
        <button type='submit' className='primary create-challenge'>
          Create Challenge
        </button>
      </form>
    </>
  );

  return (
    <Modal isOpen={showModal} style={customStyles}>
      <div className='new__challenge'>
        <div className='new__challenge-header'>
          {index <= 3 ? (
            <>
              <div className='new__challenge-header-placeholder'>
                {index > 1 ? (
                  <button
                    onClick={handleBackButton}
                    className='new__challenge-header-back'
                  >
                    <LeftArrowIcon />
                  </button>
                ) : null}
              </div>
              <div className='new__challenge-header-stage'>{index} of 3</div>
            </>
          ) : null}
          <button className='new__challenge-header-close' onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <div className='new__challenge-content'>
          {[firstPage, secondPage, thirdPage][index - 1]}
        </div>
      </div>
    </Modal>
  );
}
