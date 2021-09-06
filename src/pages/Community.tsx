import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import Activities from '../components/Activities';
import InviteModal from '../components/InviteModal';
import OnlineFriends from '../components/OnlineFriends';
import FriendRequests from '../components/FriendRequests';
import CommunityFriends from '../components/CommunityFriends';
import { ReactComponent as UserPlus } from '../assets/svgs/user-plus.svg';

export default function Community() {
  const user = useSelector((state: RootState) => state.user!);
  const [showInviteModal, setShowInviteModal] = useState(false);

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
          <OnlineFriends />
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
