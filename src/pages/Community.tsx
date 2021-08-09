import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Timi from '../assets/images/Timi.png';
import Fikayo from '../assets/images/Fikayo.png';
import Fisayo from '../assets/images/Fisayo.png';
import Profile from '../components/Profile';
import { ReactComponent as UserPlus } from '../assets/svgs/user-plus.svg';

export default function Community() {
  const [onlineFriends, setOnlineFriends] = useState<User[]>([]);
  const [sentRequests, setSentRequests] = useState<FriendRequest[]>([]);
  const [communityFriends, setCommunityFriends] = useState<User[]>([]);

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

  useEffect(() => {
    async function fetchFriends() {
      setCommunityFriends([
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
          image: Fisayo,
          email: 'a@b.com',
          firstName: 'Lewis',
          username: 'flewis',
          lastName: 'Hamilton',
        },
        {
          _id: '4',
          image: Timi,
          firstName: 'Max',
          email: 'b@c.com',
          username: 'tmax',
          lastName: 'Verstappen',
        },
        {
          _id: '5',
          image: Fisayo,
          email: 'a@b.com',
          firstName: 'Lewis',
          username: 'flewis',
          lastName: 'Hamilton',
        },
        {
          _id: '6',
          image: Timi,
          firstName: 'Max',
          email: 'b@c.com',
          username: 'tmax',
          lastName: 'Verstappen',
        },
        {
          _id: '7',
          image: Fisayo,
          email: 'a@b.com',
          firstName: 'Lewis',
          username: 'flewis',
          lastName: 'Hamilton',
        },
        {
          _id: '8',
          image: Timi,
          firstName: 'Max',
          email: 'b@c.com',
          username: 'tmax',
          lastName: 'Verstappen',
        },
      ]);
    }
    fetchFriends();
  }, []);

  useEffect(() => {
    async function fetchRequests() {
      setSentRequests([
        [
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
        ],
      ]);
    }
    fetchRequests();
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
              <div className='community__friends-add'>
                <UserPlus />
              </div>
            </div>
          </div>
          <ul className='community__friends-list'>
            {communityFriends.map(friend => (
              <li className='community__friends-item' key={friend._id}>
                <Profile user={friend} />
                <div className='community__friends-item-actions'>
                  <button className='primary'>Challenge</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='community__friend-requests'>
          <div className='community__friend-requests-header'>
            <p className='title'>Friend Requests</p>
          </div>
          <div className='community__friend-requests-content'>
            <Tabs>
              <TabList>
                <Tab>Friend Requests (2)</Tab>
                <Tab>Sent Requests</Tab>
              </TabList>

              <TabPanel>
                {/* For received requests, the format is [receipent, sender] */}
                {sentRequests.map(([user]) => (
                  <li
                    key={user._id}
                    className='community__friend-requests-item'
                  >
                    <Profile user={user}></Profile>
                    <div className='community__friend-requests-item-actions'>
                      <button className='primary'>Accept</button>
                      <button className='tertiary'>Decline</button>
                    </div>
                  </li>
                ))}
              </TabPanel>
              <TabPanel>
                {/* For sent requests, the format is [sender, recipient] */}
                <ul className='community__friend-requests-list'>
                  {sentRequests.map(([, user]) => (
                    <li
                      key={user._id}
                      className='community__friend-requests-item'
                    >
                      <Profile user={user} />
                      <div className='community__friend-requests-item-actions'>
                        <button className='tertiary'>Cancel Request</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
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
          <ul className='activity-list'></ul>
        </div>
      </div>
    </section>
  );
}
