import Fikayo from '../assets/images/Fikayo.png';
import { ReactComponent as CloseIcon } from '../assets/svgs/x.svg';
import { ReactComponent as CogIcon } from '../assets/svgs/cog.svg';
import { ReactComponent as CalendarIcon } from '../assets/svgs/calendar.svg';
import { ReactComponent as ResultsDownIcon } from '../assets/svgs/resultsDown.svg';

export default function Notifications() {
  return (
    <div className='notifications'>
      <div className='notifications__header'>
        <h2 className='notifications__header-title'>Notifications</h2>
        <button type='button' className='notifications__header-close'>
          <CloseIcon width={15} height={15} />
        </button>
      </div>
      <div className='notifications__divider divider'></div>
      <ul className='notifications__list'>
        <li className='notifications__item'>
          <div className='notifications__item-icon invitation'>
            <CogIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              <span className='bold'>Max Vibora</span> invited you to play
              <span className='bold'> WARCRAFT</span>
            </p>
            <p className='notifications__item-age'>a few seconds ago</p>
          </div>
        </li>
        <li className='notifications__item'>
          <div className='notifications__item-icon challenge'>
            <CalendarIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              <span className='bold'>Isaiah Johnson</span> challenged you to a
              game
            </p>
            <p className='notifications__item-age'>about an hour ago</p>
          </div>
        </li>
        <li className='notifications__item'>
          <div className='notifications__item-icon results'>
            <ResultsDownIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              It’s results day. You fell
              <span className='bold'> five places</span> from last week
            </p>
            <p className='notifications__item-age'>2 hours ago</p>
          </div>
        </li>
        <li className='notifications__item'>
          <div className='notifications__item-icon invitation'>
            <CogIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              <span className='bold'>Max Vibora</span> invited you to play
              <span className='bold'> WARCRAFT</span>
            </p>
            <p className='notifications__item-age'>a few seconds ago</p>
          </div>
        </li>
        <li className='notifications__item'>
          <div className='notifications__item-icon challenge'>
            <CalendarIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              <span className='bold'>Isaiah Johnson</span> challenged you to a
              game
            </p>
            <p className='notifications__item-age'>about an hour ago</p>
          </div>
        </li>
        <li className='notifications__item'>
          <div className='notifications__item-icon results'>
            <ResultsDownIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              It’s results day. You fell
              <span className='bold'> five places</span> from last week
            </p>
            <p className='notifications__item-age'>2 hours ago</p>
          </div>
        </li>
        <li className='notifications__item'>
          <div className='notifications__item-icon invitation'>
            <CogIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              <span className='bold'>Max Vibora</span> invited you to play
              <span className='bold'> WARCRAFT</span>
            </p>
            <p className='notifications__item-age'>a few seconds ago</p>
          </div>
        </li>
        <li className='notifications__item'>
          <div className='notifications__item-icon challenge'>
            <CalendarIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              <span className='bold'>Isaiah Johnson</span> challenged you to a
              game
            </p>
            <p className='notifications__item-age'>about an hour ago</p>
          </div>
        </li>
        <li className='notifications__item'>
          <div className='notifications__item-icon results'>
            <ResultsDownIcon />
            <div className='notifications__item-image'>
              <img src={Fikayo} alt='Fikayo' />
            </div>
          </div>
          <div className='notifications__item-details'>
            <p className='notifications__item-text'>
              It’s results day. You fell
              <span className='bold'> five places</span> from last week
            </p>
            <p className='notifications__item-age'>2 hours ago</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
