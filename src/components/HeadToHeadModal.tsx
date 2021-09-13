import moment from 'moment';
import DateTime from 'react-datetime';
import debounce from 'lodash.debounce';
import ClickAwayListener from 'react-click-away-listener';
import { useRef, useState, useEffect, ChangeEvent } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading,
} from 'react-accessible-accordion';

import { getFullName } from '../utils';
import UserService from '../api/UserService';
import { ReactComponent as ArrowLeftIcon } from '../assets/svgs/arrowLeft.svg';
import { ReactComponent as ChevronRightIcon } from '../assets/svgs/chevronRight.svg';

interface HeadToHeadModalProps {
  handleSubmit: HandleSubmit;
  goToPreviousPage: () => void;
}

export default function HeadToHeadModal({
  handleSubmit,
  goToPreviousPage,
}: HeadToHeadModalProps) {
  const yesterday = moment().subtract(1, 'day');

  const [title, setTitle] = useState('');
  const [, setUser] = useState({} as User);
  const [duration, setDuration] = useState('');
  const [opponent, setOpponent] = useState('');
  const [stake, setStake] = useState<number>(100);
  const [opponentType, setOpponentType] = useState('');
  const [date, setDate] = useState<string | moment.Moment>();
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const debouncedSearch = useRef(
    debounce(nextValue => {
      findUsers(nextValue);
    }, 1000)
  ).current;

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setOpponent(value);

    if (value.length >= 3) {
      debouncedSearch(value);
    } else {
      debouncedSearch('');
    }
  }

  function closeResults() {
    setSearchResults([]);
  }

  async function findUsers(value: string) {
    const results = await UserService.searchUser(value);
    setSearchResults(results);
  }

  function handleUser(user: User) {
    setUser(user);
    setSearchResults([]);
    setOpponent(getFullName(user));
  }

  useEffect(() => {
    const date = new Date();
    const currMinute = date.getMinutes();
    const newDate = date.setMinutes(currMinute + 5, 0, 0);
    setDate(moment(newDate));
  }, []);

  return (
    <div className='head-to-head'>
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

        {opponentType === 'particular' && (
          <div className='form__input-group'>
            <label htmlFor='opponent' className='form__input-label'>
              <span>Choose your opponent</span>
            </label>
            <input
              type='text'
              id='opponent'
              name='opponent'
              value={opponent}
              onChange={changeHandler}
              className='form__input-field'
            />
            {searchResults.length ? (
              <ClickAwayListener onClickAway={closeResults}>
                <ul className='new__challenge-opponent-list'>
                  {searchResults.map(user => (
                    <li
                      key={user._id}
                      onClick={() => handleUser(user)}
                      className='new__challenge-opponent-item'
                    >
                      <div className='new__challenge-opponent-image'>
                        <img src={user.image} alt='Fikayo' />
                      </div>
                      <div className='new__challenge-opponent-details'>
                        <p className='new__challenge-opponent-fullname'>
                          {getFullName(user)}
                        </p>
                        <p className='new__challenge-opponent-username'>
                          @{user.username}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ClickAwayListener>
            ) : null}
          </div>
        )}

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

        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <ChevronRightIcon width={24} height={24} />
                Additional Details
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='form__input-group'>
                <label htmlFor='title' className='form__input-label'>
                  <span>Event Name</span>
                </label>
                <input
                  id='title'
                  type='text'
                  name='title'
                  value={title}
                  className='form__input-field'
                  onChange={e => setTitle(e.target.value)}
                />
              </div>

              <div className='form__input-group'>
                <label htmlFor='duration' className='form__input-label'>
                  Gameplay Duration
                </label>
                <select
                  id='duration'
                  name='duration'
                  value={duration}
                  className='form__input-field'
                  onChange={e => setDuration(e.target.value)}
                >
                  <option value='' disabled>
                    Select the duration of the match
                  </option>
                  <option value='5'>5 minutes</option>
                  <option value='10'>10 minutes</option>
                  <option value='15'>15 minutes</option>
                  <option value='20'>20 minutes</option>
                  <option value='25'>25 minutes</option>
                  <option value='30'>30 minutes</option>
                </select>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <div className='head-to-head__actions'>
          <button
            type='button'
            onClick={goToPreviousPage}
            className='tertiary head-to-head__back-button'
          >
            <ArrowLeftIcon />
            Back
          </button>
          <button type='submit' className='primary head-to-head__create-button'>
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}
