import { formatNumber } from '../utils';
import EyeIcon from '../assets/svgs/eye.svg';

function LiveMatchPlayer({ name, points, profileImg }: LiveMatchPlayer) {
  return (
    <div className='live__match-player'>
      <div className='live__match-player-avatar'>
        <img src={profileImg} alt={name} />
      </div>
      <span className='live__match-player-name'>{name}</span>
      <span className='live__match-player-points'>{points}pts</span>
    </div>
  );
}

export default function LiveMatch({
  title,
  image,
  players,
  viewerCount,
}: LiveMatch) {
  return (
    <div className='live__match'>
      <div className='live__match-image'>
        <img src={image} alt={title} />
        <div className='label label__live'>&#9679; Live</div>
        <div className='label label__viewers'>
          <img src={EyeIcon} alt='Viewers' />
          {formatNumber(viewerCount)}
        </div>
      </div>
      <div className='live__match-details'>
        <p className='live__match-title'>FIFA 20 - EA Sports</p>
        <div className='live__match-players'>
          <LiveMatchPlayer {...players[0]} />
          <p className='live__match-versus'>Vs</p>
          <LiveMatchPlayer {...players[1]} />
        </div>
        <div className='divider'></div>
        <button className='secondary'>Watch Live</button>
      </div>
    </div>
  );
}
