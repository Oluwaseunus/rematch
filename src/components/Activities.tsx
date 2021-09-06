import moment from 'moment';
import { useState, useEffect } from 'react';

import { database } from '../firebase';
import { getFullName } from '../utils';
import { ReactComponent as GhostIcon } from '../assets/svgs/ghost.svg';

interface ActivitiesProps {
  user: User;
}

interface SingleActivityProps extends Activity {
  currentUser: User;
}

function SingleActivity({
  type,
  user,
  action,
  timestamp,
  currentUser,
}: SingleActivityProps) {
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
          {moment(timestamp).fromNow()}
        </span>
      </div>
    </li>
  );
}

export default function Activities({ user }: ActivitiesProps) {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    function handleActivities(
      snapshot: firebase.default.database.DataSnapshot
    ) {
      const data: Record<string, Activity> = snapshot.val();
      const notifications = Object.values(data);
      const unread = notifications.filter(({ status }) => status === 'unread');
      setActivities(unread);
    }

    const activitiesRef = database.ref(`activity/${user?._id}`);
    activitiesRef.on('value', handleActivities);

    return () => activitiesRef.off('value', handleActivities);
  }, [user]);

  return activities.length ? (
    <ul className='activity-list'>
      {activities.map(activity => (
        <SingleActivity
          {...activity}
          currentUser={user}
          key={activity.timestamp}
        />
      ))}
    </ul>
  ) : (
    <div className='ghost__empty'>
      <GhostIcon />
      <p>Your activities will appear here.</p>
    </div>
  );
}
