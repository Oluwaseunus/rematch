import moment from 'moment';
import ReactModal from 'react-modal';
import DateTime from 'react-datetime';
import React, { useState } from 'react';

import { ReactComponent as CloseIcon } from '../assets/svgs/close.svg';
import { ReactComponent as HeadToHeadIcon } from '../assets/svgs/headToHead.svg';
import { ReactComponent as TournamentIcon } from '../assets/svgs/tournament.svg';

interface EventState {
  eventType: string;
}

interface ChildComponentProps {
  goToNextPage: () => void;
  data?: Partial<EventState>;
  updateState: (data: Partial<EventState>) => void;
}

interface HeadToHeadModalProps {
  handleSubmit: HandleSubmit;
}

const customStyles: { content: React.CSSProperties } = {
  content: {
    zIndex: 1,
    top: '50%',
    padding: 0,
    left: '50%',
    width: '83.3rem',
    height: 'fit-content',
    minHeight: '57.8rem',
    borderRadius: '2.4rem',
    backgroundColor: '#fff',
    transform: 'translate(-50%, -50%)',
    // height: index === 3 ? '80rem' : '57.8rem',
  },
};

function ChooseEventType({ updateState, goToNextPage }: ChildComponentProps) {
  function handleStateUpdate(eventType: string) {
    return function () {
      updateState({ eventType });
      goToNextPage();
    };
  }

  return (
    <>
      <p className='modal-content-title'>Create Event</p>
      <div className='event-modal__types'>
        <button
          type='button'
          className='event-modal__type'
          onClick={handleStateUpdate('headToHead')}
        >
          <div className='event-modal__type-icon'>
            <HeadToHeadIcon />
          </div>
          <p className='event-modal__type-title'>Head To Head</p>
          <p className='event-modal__type-description'>
            Challenge a friend, or random opponent to a one-time face off.
          </p>
        </button>
        <button
          type='button'
          className='event-modal__type'
          onClick={handleStateUpdate('tournament')}
        >
          <div className='event-modal__type-icon'>
            <TournamentIcon />
          </div>
          <p className='event-modal__type-title'>Tournament</p>
          <p className='event-modal__type-description'>
            Multiple games against friends, league style.
          </p>
        </button>
      </div>
    </>
  );
}

function HeadToHeadModal({ handleSubmit }: HeadToHeadModalProps) {
  const yesterday = moment().subtract(1, 'day');

  const [duration, setDuration] = useState('');
  const [opponent, setOpponent] = useState('');
  const [selected, setSelected] = useState('');
  const [stake, setStake] = useState<number>(100);
  const [opponentType, setOpponentType] = useState('');
  const [date, setDate] = useState<string | moment.Moment>('');

  return (
    <>
      <p className='modal-content-title'>Event Details</p>
      <form onSubmit={handleSubmit}>
        <div className='form__horizontal-group'>
          <div className='form__input-group date'>
            <label htmlFor='username' className='form__input-label'>
              <span>Choose a date</span>
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
              <span>Choose a time</span>
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

        <div className='form__input-group'>
          <label htmlFor='opponentType' className='form__input-label'>
            Opponent Type
          </label>
          <select
            required
            id='opponentType'
            name='opponentType'
            value={opponentType}
            className='form__input-field'
            onChange={e => setOpponentType(e.target.value)}
          >
            <option value='' disabled>
              Select how you want to choose your opponent
            </option>
            <option value='random'>Open Challenge</option>
            <option value='particular'>I have someone in mind!</option>
          </select>
        </div>

        <div className='form__input-group'>
          <label htmlFor='points' className='form__input-label'>
            <span>How many points will you like to stake?</span>
          </label>
          <input
            required
            id='points'
            type='number'
            name='points'
            value={stake}
            className='form__input-field'
            onChange={e => setStake(+e.target.value)}
          />
        </div>

        <div className='head-to-head__actions'>
          <button className='tertiary head-to-head__back-button' type='button'>
            Back
          </button>
          <button type='submit' className='primary head-to-head__create-button'>
            Create Event
          </button>
        </div>
      </form>
    </>
  );
}

export default function NewEventModal({ closeModal }: ModalProps) {
  const [page, setPage] = useState(1);
  const [eventState, setEventState] = useState<EventState>({
    eventType: '',
  });

  function goToNextPage() {
    setPage(page + 1);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ eventState });
  }

  function updateState(data: Partial<EventState>) {
    setEventState({ ...eventState, ...data });
  }

  return (
    <ReactModal isOpen style={customStyles}>
      <div className='modal'>
        <div className='modal-header'>
          <button
            type='button'
            onClick={closeModal}
            className='modal-header-close'
          >
            <CloseIcon />
          </button>
        </div>
        <div className='modal-content'>
          {page === 1 && (
            <ChooseEventType
              updateState={updateState}
              goToNextPage={goToNextPage}
            />
          )}

          {page === 2 && eventState.eventType === 'headToHead' && (
            <HeadToHeadModal handleSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </ReactModal>
  );
}
