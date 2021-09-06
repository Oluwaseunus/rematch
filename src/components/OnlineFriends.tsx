import { useQuery } from 'react-query';

import Profile from './Profile';
import Timi from '../assets/images/Timi.png';
import Fikayo from '../assets/images/Fikayo.png';
import Fisayo from '../assets/images/Fisayo.png';
import { ReactComponent as GhostIcon } from '../assets/svgs/ghost.svg';

export default function OnlineFriends() {
  const { isLoading, isError, data } = useQuery<User[]>(
    'onlineFriends',
    async () => {
      return await new Promise<User[]>(resolve => {
        setTimeout(() => {
          return resolve([
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
        }, 1000);
      });
    }
  );

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Couldn't fetch friends</span>;

  if (!data?.length) {
    return (
      <div className='ghost__empty'>
        <GhostIcon />
        <p>Your online friends will appear here.</p>
      </div>
    );
  }

  return (
    <ul className='community__online-list'>
      {data.map((friend, index) => (
        <li className='online__friend' key={index}>
          <Profile user={friend} withBorder />
        </li>
      ))}
    </ul>
  );
}
