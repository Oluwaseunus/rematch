import Modal from 'react-modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { getFullName } from '../utils';
import Cog from '../assets/svgs/cog.svg';
import HeaderDropdown from './HeaderDropdown';
import Steam from '../assets/images/steam icon.png';
import NewChallengeModal from './NewChallengeModal';
import { ReactComponent as Dropdown } from '../assets/svgs/dropdown.svg';

// required once for react-modal
Modal.setAppElement('#root');

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state: RootState) => state.user!);

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
              <p className='connect__badge-title'>New Challenge</p>
            </button>
            <div className='connect__badge current'>
              <img
                src={Cog}
                alt='Current Game'
                className='connect__badge-icon'
              />
              <p className='connect__badge-title'>FIFA 21</p>
              <Dropdown className='connect__badge-dropdown' />
            </div>
          </div>

          <button className='notification__bell'>&nbsp;</button>

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

          {showDropdown ? (
            <HeaderDropdown user={user} fullname={fullname} />
          ) : null}
        </section>
      </header>

      {/* rendering this way prevents us from having to reset the modal state
        by completely removing the modal when it's not needed. */}
      {showModal ? (
        <NewChallengeModal showModal closeModal={() => setShowModal(false)} />
      ) : null}
    </>
  );
}

export default Header;
