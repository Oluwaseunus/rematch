import FlagIcon from '../assets/svgs/flag.svg';
import TrophyIcon from '../assets/svgs/trophy.svg';

interface DashboardHistoryProps {
  lastPlayed: LastPlayed;
  scoreCards: ScoreCard[];
}

function ScoreCardItem({ game, score }: ScoreCard) {
  return (
    <div className='table__row'>
      <div className='table__row-title'>{game}</div>
      <div className='table__row-value'>{score}</div>
    </div>
  );
}

export default function DashboardHistory({
  lastPlayed,
  scoreCards,
}: DashboardHistoryProps) {
  const { title, image, ...details } = lastPlayed;

  return (
    <div className='history'>
      <div className='last-played'>
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
            <div className='table'>
              <div className='table__row'>
                <div className='table__row-title'>Game</div>
                <div className='table__row-value'>Score</div>
              </div>
              <div className='divider'></div>
              {scoreCards.map((item, index) => (
                <ScoreCardItem key={index} {...item} />
              ))}
              <div className='divider'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
