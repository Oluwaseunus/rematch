import FlagIcon from '../assets/svgs/flag.svg';
import Fikayo from '../assets/images/Fikayo.png';
import TrophyIcon from '../assets/svgs/trophy.svg';

interface DashboardHistoryProps {
  lastPlayed: LastPlayed;
  scoreCards: ScoreCard[];
}

export default function DashboardHistory({
  lastPlayed,
}: DashboardHistoryProps) {
  const { title, image, ...details } = lastPlayed;

  return (
    <div className='history'>
      <div className='history-card'>
        <div className='card'>
          <div className='card__content'>
            <div className='image'>
              <img src={image} alt={title} />
            </div>
            <div className='right'>
              <div className='details'>
                <div className='detail'>
                  <div className='detail__icon trophy'>
                    <img
                      alt='Level'
                      src={TrophyIcon}
                      className='detail__icon-image'
                    />
                  </div>
                  <div className='detail__content'>
                    <div className='detail__value'>{details.level}</div>
                    <div className='detail__label'>Level</div>
                  </div>
                </div>
                <div className='detail'>
                  <div className='detail__icon trophy'>
                    <img
                      alt='Rank'
                      src={TrophyIcon}
                      className='detail__icon-image'
                    />
                  </div>
                  <div className='detail__content'>
                    <div className='detail__value'>{details.ranking}</div>
                    <div className='detail__label'>Rank</div>
                  </div>
                </div>
                <div className='detail'>
                  <div className='detail__icon flag'>
                    <img
                      alt='Points'
                      src={FlagIcon}
                      className='detail__icon-image'
                    />
                  </div>
                  <div className='detail__content'>
                    <div className='detail__value'>{details.points}</div>
                    <div className='detail__label'>Points</div>
                  </div>
                </div>
                <div className='detail'>
                  <div className='detail__icon flag'>
                    <img
                      alt='Win %'
                      src={FlagIcon}
                      className='detail__icon-image'
                    />
                  </div>
                  <div className='detail__content'>
                    <div className='detail__value'>{details.percentage}</div>
                    <div className='detail__label'>Win %</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='divider'></div>
        </div>
      </div>
      <div className='score-card'>
        <div className='card'>
          <div className='card__content score-card__content'>
            <div className='last__played'>Last Played</div>
            <div className='last__played-participants__scores'>
              <div className='last__played-participant'>
                <div className='last__played-participant-profile'>
                  <div className='last__played-participant-image-wrapper winner'>
                    <img
                      src={Fikayo}
                      alt='Fikayo'
                      className='last__played-participant-image'
                    />
                  </div>
                  <p className='last__played-participant-username'>@thebizz</p>
                </div>
              </div>
              <p className='last__played-results'>
                <span className='winner'>3</span> : <span>1</span>
              </p>
              <div className='last__played-participant'>
                <div className='last__played-participant-profile'>
                  <div className='last__played-participant-image-wrapper'>
                    <img
                      src={Fikayo}
                      alt='Fikayo'
                      className='last__played-participant-image'
                    />
                  </div>
                  <p className='last__played-participant-username'>@thebizz</p>
                </div>
              </div>
            </div>
            <div className='last__played-actions'>
              <button className='primary'>Play Again</button>
              <button className='tertiary'>Results</button>
            </div>
            <div className='last__played-points'>
              <p className='last__played-points-title'>Points Change</p>
              <p className='last__played-points-value'>230</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
