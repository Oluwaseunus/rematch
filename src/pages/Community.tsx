import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { RootState } from '../store';
import { database } from '../firebase';
import Profile from '../components/Profile';
import Timi from '../assets/images/Timi.png';
import UserService from '../api/UserService';
import Fikayo from '../assets/images/Fikayo.png';
import Fisayo from '../assets/images/Fisayo.png';
import SingleActivity from '../components/SingleActivity';
import { ReactComponent as UserPlus } from '../assets/svgs/user-plus.svg';

export default function Community() {
  const user = useSelector((state: RootState) => state.user);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [onlineFriends, setOnlineFriends] = useState<User[]>([]);
  const [communityFriends, setCommunityFriends] = useState<User[]>([]);
  const [sentRequests, setSentRequests] = useState<FriendRequest[]>([]);
  const [receivedRequests, setReceivedRequests] = useState<FriendRequest[]>([]);

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
      const friendsList = await UserService.fetchFriends();

      setCommunityFriends(
        // remove the current user from the array of friends.
        friendsList.map(
          friends => friends.filter(({ _id }) => _id !== user?._id)[0]
        )
      );
    }
    fetchFriends();
  }, [user]);

  useEffect(() => {
    async function fetchRequests() {
      const receivedRequests = await UserService.fetchFriendRequests({
        type: 'received',
        status: 'pending',
      });
      const sentRequests = await UserService.fetchFriendRequests({
        type: 'sent',
        status: 'pending',
      });

      setSentRequests(sentRequests);
      setReceivedRequests(receivedRequests);
    }
    fetchRequests();
  }, []);

  useEffect(() => {
    const activitiesRef = database.ref(`activity/${user?._id}`);
    activitiesRef.on('value', snapshot => {
      const data: Record<string, Activity> = snapshot.val();
      const notifications = Object.values(data);
      const unread = notifications.filter(({ status }) => status === 'unread');
      setActivities(unread);
    });
  }, [user]);

  function updateRequest(requestId: string, update: 'accept' | 'reject') {
    return async function () {
      await UserService.updateFriendRequest(requestId, update);
      setReceivedRequests(
        receivedRequests.filter(({ _id }) => _id !== requestId)
      );
    };
  }

  function cancelRequest(requestId: string) {
    return async function () {
      await UserService.cancelFriendRequest(requestId);
      setSentRequests(sentRequests.filter(({ _id }) => _id !== requestId));
    };
  }

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
                <Tab>Friend Requests ({receivedRequests.length})</Tab>
                <Tab>Sent Requests ({sentRequests.length})</Tab>
              </TabList>

              <TabPanel>
                {receivedRequests.map(({ _id, user1: sender }) => (
                  <li
                    key={sender._id}
                    className='community__friend-requests-item'
                  >
                    <Profile user={sender}></Profile>
                    <div className='community__friend-requests-item-actions'>
                      <button
                        className='primary'
                        onClick={updateRequest(_id, 'accept')}
                      >
                        Accept
                      </button>
                      <button
                        className='tertiary'
                        onClick={updateRequest(_id, 'reject')}
                      >
                        Decline
                      </button>
                    </div>
                  </li>
                ))}
              </TabPanel>
              <TabPanel>
                <ul className='community__friend-requests-list'>
                  {sentRequests.map(({ _id, user2: recipient }) => (
                    <li
                      key={recipient._id}
                      className='community__friend-requests-item'
                    >
                      <Profile user={recipient} />
                      <div className='community__friend-requests-item-actions'>
                        <button
                          className='tertiary'
                          onClick={cancelRequest(_id)}
                        >
                          Cancel Request
                        </button>
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
          <ul className='activity-list'>
            {activities.map(activity => (
              <SingleActivity key={activity.timestamp} {...activity} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
