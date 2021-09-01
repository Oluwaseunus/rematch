import React from 'react';
import Profile from './Profile';
import { useQuery } from 'react-query';
import UserService from '../api/UserService';
import { ReactComponent as EmptyFriendsIcon } from '../assets/svgs/emptyFriends.svg';

interface CommunityFriendsProps {
  user: User;
}

export default function CommunityFriends({ user }: CommunityFriendsProps) {
  const { isLoading, isError, data } = useQuery<User[]>(
    'communityFriends',
    async () => {
      const friendsList = await UserService.fetchFriends();
      return friendsList.map(
        friends => friends.filter(({ _id }) => _id !== user?._id)[0]
      );
    }
  );

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Couldn't fetch friends</span>;

  if (!data?.length)
    return (
      <div className='community__friends-empty'>
        <div className='community__friends-empty-icon'>
          <EmptyFriendsIcon />
        </div>
        <p className='community__friends-empty-text'>
          Your friends list will appear here. But why wait? Challenge someone{' '}
          <br />
          to get started.
        </p>
        <button className='primary community__friends-empty-button'>
          Create new event
        </button>
      </div>
    );

  return (
    <ul className='community__friends-list'>
      {data.map(friend => (
        <li className='community__friends-item' key={friend._id}>
          <Profile user={friend} />
          <div className='community__friends-item-actions'>
            <button className='primary'>Challenge</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
