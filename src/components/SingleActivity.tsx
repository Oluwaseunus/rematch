import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';

import { RootState } from '../store';
import { getFullName } from '../utils';

dayjs.extend(relativeTime);

export default function SingleActivity({
  type,
  user,
  action,
  timestamp,
}: Activity) {
  const currentUser = useSelector((state: RootState) => state.user!);

  let fullname = getFullName(user);
  if (fullname === getFullName(currentUser)) fullname = 'You';

  function composeActivity(): string {
    let activity = '';
    if (action === 'sent') activity = ` sent you a `;
    else activity = ` ${action} your `;
    return activity;
  }

  return (
    <li className='activity__item'>
      <div className='activity__item-image-wrapper'>
        <img src={user.image} alt={fullname} className='activity__item-image' />
      </div>
      <div className='activity__item-text'>
        <p className='activity__item-text-main'>
          <span className='activity__item-text bold'>{fullname}</span>
          {composeActivity()}
          <span className='activity__item-text bold'>{type}.</span>
        </p>
        <span className='activity__item-text-tagline'>
          {dayjs(timestamp).fromNow()}
        </span>
      </div>
    </li>
  );
}
