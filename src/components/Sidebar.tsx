import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './Header';
import Sesan from '../assets/images/Sesan.png';
import Timi from '../assets/images/Timi.png';
import Fikayo from '../assets/images/Fikayo.png';
import SidebarCommunity from './SidebarCommunity';
import { ReactComponent as UsersIcon } from '../assets/svgs/users-sidebar.svg';
import { ReactComponent as DashboardIcon } from '../assets/svgs/circlesFour.svg';
import { ReactComponent as ControllerIcon } from '../assets/svgs/controller.svg';
import SidebarCard from './SidebarCard';

const StyledAside = styled.aside`
  width: 20%;
  height: 100vh;
  padding: 0 2rem;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: white;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  .routes {
    padding-bottom: 8rem;
    border-bottom: 1px solid #e3e1e4;

    .route {
      width: 90%;
      height: 6.4rem;
      display: flex;
      font-weight: 500;
      font-size: 1.8rem;
      border-radius: 4rem;
      align-items: center;
      padding: 1rem 1.5rem;
      justify-content: flex-start;

      &:not(:last-child) {
        margin-bottom: 7px;
      }

      a {
        font-family: inherit;
        text-decoration: none;
        color: var(--text-grey);
      }

      &.active {
        font-weight: 600;
        line-height: 2.2rem;
        letter-spacing: 0.0035rem;
        background-color: var(--primary-color);

        a {
          color: white;
        }
      }

      &__icon {
        width: 3.2rem;
        height: 3.2rem;
        margin: 0 1.6rem 0 1.8rem;
      }
    }
  }
`;

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
    <StyledAside>
      <Header />

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
    </StyledAside>
  );
}

export default Sidebar;
