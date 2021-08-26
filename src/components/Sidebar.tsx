import { NavLink } from 'react-router-dom';

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
        <NavLink to='/app/dashboard' activeClassName='active' className='route'>
          <DashboardIcon className='route__icon' />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to='/app/community' className='route'>
          <UsersIcon className='route__icon' />
          <p>Community</p>
        </NavLink>
        <NavLink to='/app/games' className='route'>
          <ControllerIcon className='route__icon' />
          <p>My Games</p>
        </NavLink>
        <NavLink to='/app/leaderboard' className='route'>
          <ControllerIcon className='route__icon' />
          <p>Leaderboard</p>
          <div className='leaderboard__route-ranking'>
            <p>5</p>
          </div>
        </NavLink>
      </div>

      <SidebarCard />
    </aside>
  );
}

export default Sidebar;
