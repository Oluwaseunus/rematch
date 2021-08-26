import { useHistory } from 'react-router-dom';

import UserActionsCreator from '../store/actions/user';
import { ReactComponent as Logout } from '../assets/svgs/logout.svg';
import { ReactComponent as HAS } from '../assets/svgs/helpAndSupport.svg';
import { ReactComponent as SettingsCog } from '../assets/svgs/settingsCog.svg';
import { ReactComponent as ChevronRight } from '../assets/svgs/chevronRight.svg';

interface HeaderDropdownProps {
  user: User;
  fullname: string;
}

export default function HeaderDropdown({
  user,
  fullname,
}: HeaderDropdownProps) {
  const history = useHistory();

  function handleLogout() {
    UserActionsCreator.unauthenticate();
    history.push('/');
  }

  return (
    <div className='header-dropdown'>
      <div className='header-dropdown__profile'>
        <div className='header-dropdown__profile-image'>
          <img src={user.image} alt={fullname} />
        </div>
        <div className='header-dropdown__profile-details'>
          <p className='header-dropdown__profile-name'>{fullname}</p>
          <p className='header-dropdown__profile-action'>View profile</p>
        </div>
      </div>
      <div className='divider'></div>
      <div className='header-dropdown__options'>
        <button type='button' className='header-dropdown__option'>
          <div className='header-dropdown__option-icon'>
            <SettingsCog />
          </div>
          <p className='header-dropdown__option-text'>Settings</p>
          <div className='header-dropdown__option-next'>
            <ChevronRight width={20} />
          </div>
        </button>
        <button type='button' className='header-dropdown__option'>
          <div className='header-dropdown__option-icon'>
            <HAS width={18} height={18} />
          </div>
          <p className='header-dropdown__option-text'>Help & Support</p>
          <div className='header-dropdown__option-next'>
            <ChevronRight width={20} />
          </div>
        </button>
        <button
          type='button'
          onClick={handleLogout}
          className='header-dropdown__option'
        >
          <div className='header-dropdown__option-icon'>
            <Logout />
          </div>
          <p className='header-dropdown__option-text logout'>Log Out</p>
        </button>
      </div>
    </div>
  );
}
