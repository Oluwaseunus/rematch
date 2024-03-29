import ReactModal from 'react-modal';
import React, { useState } from 'react';

import { modalStyles } from '../constants';
import HeadToHeadModal from './HeadToHeadModal';
import TournamentModal from './TournamentModal';
import { ReactComponent as CloseIcon } from '../assets/svgs/close.svg';
import { ReactComponent as VictoryIcon } from '../assets/svgs/victory.svg';
import { ReactComponent as HeadToHeadIcon } from '../assets/svgs/headToHead.svg';
import { ReactComponent as TournamentIcon } from '../assets/svgs/tournament.svg';

type EventType = 'headToHead' | 'tournament';

interface ChildComponentProps {
  goToNextPage: () => void;
  setEventType: (eventType: EventType) => void;
}

function ChooseEventType({ setEventType, goToNextPage }: ChildComponentProps) {
  function handleStateUpdate(eventType: EventType) {
    return function () {
      setEventType(eventType);
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

export default function NewEventModal({ closeModal }: ModalProps) {
  const [page, setPage] = useState(1);
  const [eventType, setEventType] = useState<EventType>();

  function goToNextPage() {
    setPage(page + 1);
  }

  function goToPreviousPage() {
    setPage(page - 1);
  }

  function submitHeadToHead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ eventType });
  }

  function submitTournament(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ eventType });
  }

  return (
    <ReactModal isOpen style={modalStyles}>
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
              setEventType={setEventType}
              goToNextPage={goToNextPage}
            />
          )}

          {page === 2 ? (
            eventType === 'headToHead' ? (
              <HeadToHeadModal
                handleSubmit={submitHeadToHead}
                goToPreviousPage={goToPreviousPage}
              />
            ) : eventType === 'tournament' ? (
              <TournamentModal
                handleSubmit={submitTournament}
                goToPreviousPage={goToPreviousPage}
              />
            ) : null
          ) : null}

          {page === 3 && (
            <div className='new__challenge-created'>
              <div className='new__challenge-content-victory'>
                <VictoryIcon />
              </div>
              <p className='modal-content-title'>Event Created</p>
              <p className='new__challenge-content-info'>
                Your event has been created.
                <br />
                You will be notified on updates to it.
              </p>
              <button className='primary' onClick={closeModal}>
                Okay, great
              </button>
            </div>
          )}
        </div>
      </div>
    </ReactModal>
  );
}
