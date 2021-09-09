import Modal from 'react-modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ClickAwayListener from 'react-click-away-listener';

import { RootState } from '../store';
import { getFullName } from '../utils';
import Cog from '../assets/svgs/cog.svg';
import Notifications from './Notifications';
import GamesDropdown from './GamesDropdown';
import NewEventModal from './NewEventModal';
import HeaderDropdown from './HeaderDropdown';
import Steam from '../assets/images/steam icon.png';
import { ReactComponent as Dropdown } from '../assets/svgs/dropdown.svg';

// required once for react-modal
Modal.setAppElement('#root');

function Header() {
  const [showGames, setShowGames] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentGame, setCurrentGame] = useState('FIFA 21');
  const user = useSelector((state: RootState) => state.user!);
  const [showNotifications, setShowNotifications] = useState(false);

  const fullname = getFullName(user);

  return (
    <>
      <header>
        <section className='content'>
          <div className='header__search'>
            <input type='text' placeholder='Search game' />
          </div>

          <div className='connect__badges'>
            <button
              className='connect__badge'
              onClick={() => setShowModal(!showModal)}
            >
              <img src={Steam} alt='steam' className='connect__badge-icon' />
              <p className='connect__badge-title'>New Event</p>
            </button>
            <button
              type='button'
              className='connect__badge current'
              onClick={() => setShowGames(!showGames)}
            >
              <img
                src={Cog}
                alt='Current Game'
                className='connect__badge-icon'
              />
              <p className='connect__badge-title'>{currentGame}</p>
              <Dropdown className='connect__badge-dropdown' />
            </button>
          </div>

          <button
            type='button'
            className='notification__bell'
            onClick={() => setShowNotifications(!showNotifications)}
          >
            &nbsp;
          </button>

          <button
            type='button'
            className='profile'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className='avi'>
              <img src={user.image} alt={fullname} />
            </div>
            <div className='dropdown'></div>
          </button>

          {showGames ? (
            <ClickAwayListener onClickAway={() => setShowGames(false)}>
              <GamesDropdown setCurrentGame={setCurrentGame} />
            </ClickAwayListener>
          ) : null}

          {showNotifications ? (
            <ClickAwayListener onClickAway={() => setShowNotifications(false)}>
              <Notifications />
            </ClickAwayListener>
          ) : null}

          {showDropdown ? (
            <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
              <HeaderDropdown user={user} fullname={fullname} />
            </ClickAwayListener>
          ) : null}
        </section>
      </header>

      {/* rendering this way prevents us from having to reset the modal state
        by completely removing the modal when it's not needed. */}
      {showModal ? (
        <NewEventModal showModal closeModal={() => setShowModal(false)} />
      ) : null}
    </>
  );
}

export default Header;
