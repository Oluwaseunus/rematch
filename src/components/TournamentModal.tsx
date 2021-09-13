import moment from 'moment';
import DateTime from 'react-datetime';
import { useState, useEffect, FormEvent, useCallback } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading,
} from 'react-accessible-accordion';
import { ReactComponent as ArrowLeftIcon } from '../assets/svgs/arrowLeft.svg';

interface TournamentModalProps {
  handleSubmit: HandleSubmit;
  goToPreviousPage: () => void;
}

interface Form {
  title: string;
  stake: string;
  numLegs: string;
  rewards: string;
  duration: string;
  eventType: string;
  numPlayers: string;
  guestsCanInvite: boolean;
  endDate: string | moment.Moment;
  startDate: string | moment.Moment;
}

export default function TournamentModal({
  handleSubmit,
  goToPreviousPage,
}: TournamentModalProps) {
  const yesterday = moment().subtract(1, 'day');

  const [page, setPage] = useState(1);
  const [accordionText, setAccordionText] = useState('+ End Time and Date');
  const [form, setForm] = useState<Form>({
    title: '',
    stake: '',
    numLegs: '',
    rewards: '',
    endDate: '',
    duration: '',
    eventType: '',
    startDate: '',
    numPlayers: '',
    guestsCanInvite: true,
  });

  const updateForm = useCallback((update: Partial<typeof form>) => {
    setForm(form => ({
      ...form,
      ...update,
    }));
  }, []);

  useEffect(() => {
    // for start date and time
    const date = new Date();
    const currMinute = date.getMinutes();
    const startDate = date.setMinutes(currMinute + 5);

    // for end date and time
    const secondDate = new Date(startDate);
    const currentHour = new Date(startDate).getHours();
    // set time to 60 minutes after 5 minutes from now (startDate)
    const endDate = secondDate.setHours(currentHour + 1);
    updateForm({ endDate: moment(endDate), startDate: moment(startDate) });
  }, [updateForm]);

  function goBack() {
    if (page === 1) {
      goToPreviousPage();
    } else {
      setPage(page - 1);
    }
  }

  function handleAccordionChange(uuids: string[]) {
    if (uuids.includes('endDate')) {
      setAccordionText('- End Time and Date');
    } else {
      setAccordionText('+ End Time and Date');
    }
  }

  function goToNextPage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPage(page + 1);
  }

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // tournament async things;
    handleSubmit(e);
  }

  return (
    <div className='tournament-modal'>
      {page === 1 ? (
        <form onSubmit={goToNextPage}>
          <p className='modal-content-title'>Event Details</p>
          <div className='form__input-group'>
            <label htmlFor='title' className='form__input-label'>
              <span>Event Name</span>
            </label>
            <input
              required
              id='title'
              type='text'
              name='title'
              value={form.title}
              className='form__input-field'
              onChange={e => updateForm({ title: e.target.value })}
            />
          </div>

          <div className='form__horizontal-group'>
            <div className='form__input-group date'>
              <label htmlFor='username' className='form__input-label'>
                <span>Choose Start Date</span>
              </label>
              <DateTime
                timeFormat={false}
                value={form.startDate}
                isValidDate={current => current.isAfter(yesterday)}
                onChange={startDate => updateForm({ startDate: startDate })}
                inputProps={{
                  className: 'form__input-field',
                  required: true,
                }}
              />
            </div>
            <div className='form__input-group'>
              <label htmlFor='username' className='form__input-label'>
                <span>Choose Start Time</span>
              </label>
              <DateTime
                dateFormat={false}
                timeFormat='h:mm A'
                value={form.startDate}
                isValidDate={current => current.isAfter(Date.now())}
                onChange={startDate => updateForm({ startDate: startDate })}
                inputProps={{
                  className: 'form__input-field',
                  required: true,
                }}
              />
            </div>
          </div>

          <Accordion allowZeroExpanded onChange={handleAccordionChange}>
            <AccordionItem uuid='endDate'>
              <AccordionItemPanel>
                <div className='form__horizontal-group'>
                  <div className='form__input-group date'>
                    <label htmlFor='username' className='form__input-label'>
                      <span>Choose End Date</span>
                    </label>
                    <DateTime
                      timeFormat={false}
                      value={form.endDate}
                      inputProps={{ className: 'form__input-field' }}
                      isValidDate={current => current.isAfter(yesterday)}
                      onChange={endDate => updateForm({ endDate: endDate })}
                    />
                  </div>
                  <div className='form__input-group'>
                    <label htmlFor='username' className='form__input-label'>
                      <span>Choose End Time</span>
                    </label>
                    <DateTime
                      dateFormat={false}
                      timeFormat='h:mm A'
                      value={form.endDate}
                      inputProps={{ className: 'form__input-field' }}
                      onChange={endDate => updateForm({ endDate: endDate })}
                      isValidDate={current => current.isAfter(form.startDate)}
                    />
                  </div>
                </div>
              </AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>{accordionText}</AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          </Accordion>

          <div className='form__input-group'>
            <label htmlFor='eventType' className='form__input-label'>
              Event Type
            </label>
            <select
              required
              id='eventType'
              name='eventType'
              value={form.eventType}
              className='form__input-field'
              onChange={e => updateForm({ eventType: e.target.value })}
            >
              <option value='' disabled>
                Type of event
              </option>
              <option value='private'>Private</option>
              <option value='public'>Public</option>
            </select>
          </div>

          <div className='form__input-group switch-group'>
            <label className='switch-label' htmlFor='guestsCanInvite'>
              <p>Guests can invite others</p>
              <span>If on, guests can invite others to join the event</span>
            </label>
            <div className='switch-wrapper'>
              <span
                className={`switch-slider ${
                  form.guestsCanInvite ? 'checked' : ''
                }`}
                onClick={() =>
                  updateForm({
                    guestsCanInvite: !form.guestsCanInvite,
                  })
                }
              ></span>
            </div>
          </div>

          <div className='form__input-group'>
            <label htmlFor='points' className='form__input-label'>
              <span>Points to enter competition</span>
            </label>
            <input
              required
              id='points'
              type='number'
              name='points'
              value={form.stake}
              className='form__input-field'
              placeholder='Enter number of points'
              onChange={e => updateForm({ stake: e.target.value })}
            />
          </div>

          <div className='form__input-group'>
            <label htmlFor='rewards' className='form__input-label'>
              Rewards
            </label>
            <select
              required
              id='rewards'
              name='rewards'
              value={form.rewards}
              className='form__input-field'
              onChange={e => updateForm({ rewards: e.target.value })}
            >
              <option value='' disabled>
                How will the winnings be split
              </option>
              <option value='one'>Winner takes all</option>
              <option value='all'>50-30-20</option>
            </select>
          </div>

          <div className='head-to-head__actions'>
            <button
              type='button'
              onClick={goBack}
              className='tertiary head-to-head__back-button'
            >
              <ArrowLeftIcon />
              Back
            </button>

            <button
              type='submit'
              className='primary head-to-head__create-button'
            >
              Next
              <ArrowLeftIcon style={{ transform: 'scaleX(-1)' }} />
            </button>
          </div>
        </form>
      ) : page === 2 ? (
        <form onSubmit={submitForm}>
          <p className='modal-content-title'>Additional Event Details</p>

          <p className='title tournament-form-title'>Description</p>

          <div className='form__input-group'>
            <label htmlFor='description' className='form__input-label'>
              <span>
                Provide more information about your event so guests know what to
                expect.
              </span>
            </label>
            <textarea
              cols={30}
              rows={10}
              id='description'
              name='description'
              className='form__input-textarea'
            ></textarea>
          </div>

          <div className='form__input-group'>
            <label htmlFor='numPlayers' className='form__input-label'>
              <span>Total number of players</span>
            </label>
            <input
              required
              type='number'
              id='numPlayers'
              name='numPlayers'
              value={form.numPlayers}
              className='form__input-field'
              onChange={e => updateForm({ numPlayers: e.target.value })}
            />
          </div>

          <p className='title tournament-form-title'>Game Settings</p>

          <div className='form__input-group'>
            <label htmlFor='duration' className='form__input-label'>
              Gameplay Duration
            </label>
            <select
              required
              id='duration'
              name='duration'
              value={form.duration}
              className='form__input-field'
              onChange={e => updateForm({ duration: e.target.value })}
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

          <div className='form__input-group'>
            <label htmlFor='numLegs' className='form__input-label'>
              Number of Legs
            </label>
            <select
              required
              id='numLegs'
              name='numLegs'
              value={form.numLegs}
              className='form__input-field'
              onChange={e => updateForm({ numLegs: e.target.value })}
            >
              <option value='' disabled>
                Select the number of legs
              </option>
              <option value='1'>1 leg</option>
              <option value='2'>2 legs</option>
            </select>
          </div>

          <div className='head-to-head__actions'>
            <button
              type='button'
              onClick={goBack}
              className='tertiary head-to-head__back-button'
            >
              <ArrowLeftIcon />
              Back
            </button>

            <button
              type='submit'
              className='primary head-to-head__create-button'
            >
              Create Event
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
