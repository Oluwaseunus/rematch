import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SidebarCard from './SidebarCard';
import SidebarHeader from './SidebarHeader';
import Timi from '../assets/images/Timi.png';
import Sesan from '../assets/images/Sesan.png';
import Fikayo from '../assets/images/Fikayo.png';
import SidebarCommunity from './SidebarCommunity';
import { ReactComponent as UsersIcon } from '../assets/svgs/users-sidebar.svg';
import { ReactComponent as DashboardIcon } from '../assets/svgs/circlesFour.svg';
import { ReactComponent as ControllerIcon } from '../assets/svgs/controller.svg';

function Sidebar() {
  const [members, setMembers] = useState<CommunityMember[]>([]);

  // fetch members effect
  useEffect(() => {
    async function fetchCommunityMembers() {
      setMembers([
        { _id: '1', name: 'Sesan Okunubi', imgSrc: Sesan },
        { _id: '2', name: 'Timi Aderinsola', imgSrc: Timi },
        { _id: '3', name: 'Fikayo Sanni', imgSrc: Fikayo },
        { _id: '4', name: 'Shalom Owolabi', imgSrc: Sesan },
      ]);
    }
    fetchCommunityMembers();
  }, []);

  return (
    <aside>
      <SidebarHeader />

      <div className='routes'>
        <div className='route active'>
          <DashboardIcon className='route__icon' />
          <Link to='/dashboard'>Dashboard</Link>
        </div>
        <div className='route'>
          <UsersIcon className='route__icon' />
          <Link to='/community'>Community</Link>
        </div>
        <div className='route'>
          <ControllerIcon className='route__icon' />
          <Link to='/games'>My Games</Link>
        </div>
        <div className='route'>
          <ControllerIcon className='route__icon' />
          <Link to='/leaderboard'>Leaderboard</Link>
        </div>
      </div>

      <SidebarCommunity members={members} />

      <SidebarCard />
    </aside>
  );
}

export default Sidebar;