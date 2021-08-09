import { Link } from 'react-router-dom';

import SidebarCard from './SidebarCard';
import SidebarHeader from './SidebarHeader';
import { ReactComponent as UsersIcon } from '../assets/svgs/users-sidebar.svg';
import { ReactComponent as DashboardIcon } from '../assets/svgs/circlesFour.svg';
import { ReactComponent as ControllerIcon } from '../assets/svgs/controller.svg';

function Sidebar() {
  return (
    <aside>
      <SidebarHeader />

      <div className='routes'>
        <div className='route active'>
          <DashboardIcon className='route__icon' />
          <Link to='/app/dashboard'>Dashboard</Link>
        </div>
        <div className='route'>
          <UsersIcon className='route__icon' />
          <Link to='/app/community'>Community</Link>
        </div>
        <div className='route'>
          <ControllerIcon className='route__icon' />
          <Link to='/app/games'>My Games</Link>
        </div>
        <div className='route'>
          <ControllerIcon className='route__icon' />
          <Link to='/app/leaderboard'>Leaderboard</Link>
        </div>
      </div>

      <SidebarCard />
    </aside>
  );
}

export default Sidebar;
