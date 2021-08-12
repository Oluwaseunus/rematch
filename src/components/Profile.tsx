import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { getFullName } from '../utils';

interface ProfileProps {
  user: User;
  withBorder?: boolean;
}

export default function Profile({ user, withBorder }: ProfileProps) {
  const currentUser = useSelector((state: RootState) => state.user!);
  let fullname = getFullName(user);
  if (fullname === getFullName(currentUser)) fullname = 'You';

  return (
    <div className='user-profile'>
      <div
        className={`user-profile-image-wrapper ${withBorder ? 'bordered' : ''}`}
      >
        <img src={user.image} alt={fullname} className='user-profile-image' />
      </div>
      <p className='user-profile-name'>{fullname}</p>
    </div>
  );
}
