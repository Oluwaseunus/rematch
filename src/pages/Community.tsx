import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { RootState } from '../store';
import Profile from '../components/Profile';
import Timi from '../assets/images/Timi.png';
import Fikayo from '../assets/images/Fikayo.png';
import Fisayo from '../assets/images/Fisayo.png';
import Activities from '../components/Activities';
import InviteModal from '../components/InviteModal';
import FriendRequests from '../components/FriendRequests';
import CommunityFriends from '../components/CommunityFriends';
import { ReactComponent as UserPlus } from '../assets/svgs/user-plus.svg';

export default function Community() {
  const user = useSelector((state: RootState) => state.user!);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [onlineFriends, setOnlineFriends] = useState<User[]>([]);

  useEffect(() => {
    async function fetchFriends() {
      setOnlineFriends([
        {
          _id: '1',
          image: Fisayo,
          email: 'a@b.com',
          firstName: 'Lewis',
          username: 'flewis',
          lastName: 'Hamilton',
        },
        {
          _id: '2',
          image: Timi,
          firstName: 'Max',
          email: 'b@c.com',
          username: 'tmax',
          lastName: 'Verstappen',
        },
        {
          _id: '3',
          image: Fikayo,
          email: 'c@d.com',
          lastName: 'Perez',
          username: 'fperez',
          firstName: 'Alonzo',
        },
      ]);
    }
    fetchFriends();
  }, []);

  return (
    <section className='page community'>
      <div className='community__content'>
        <div className='community__friends'>
          <div className='community__friends-header'>
            <p className='title'>My Friends</p>
            <div className='community__friends-actions'>
              <div className='community__friends-search'>
                <input type='text' placeholder='Search' />
              </div>
              <button
                className='community__friends-add'
                onClick={() => setShowInviteModal(true)}
              >
                <UserPlus />
              </button>
            </div>
          </div>
          <CommunityFriends user={user} />
        </div>
        <FriendRequests />
      </div>
      <div className='community__sidebar right-sidebar'>
        <div className='community__online'>
          <p className='title'>Online</p>
          <ul className='community__online-list'>
            {onlineFriends.map((friend, index) => (
              <li className='online__friend' key={index}>
                <Profile user={friend} withBorder />
              </li>
            ))}
          </ul>
        </div>
        <div className='community__activity'>
          <p className='title'>Activities</p>
          <Activities user={user} />
        </div>
      </div>

      {showInviteModal ? (
        <InviteModal showModal closeModal={() => setShowInviteModal(false)} />
      ) : null}
    </section>
  );
}
