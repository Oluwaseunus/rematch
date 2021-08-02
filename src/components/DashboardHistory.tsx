import { capitalize, sentencify } from '../utils';

interface DetailProps {
  label: string;
  value: string;
}

interface DashboardHistoryProps {
  lastPlayed: LastPlayed;
  scoreCards: ScoreCard[];
}

function Detail({ label, value }: DetailProps) {
  return (
    <div className='detail'>
      <div className='label'>{label}</div>
      <div className='value'>{value}</div>
    </div>
  );
}

function ScoreCardItem({ game, score }: ScoreCard) {
  return (
    <div className='table__row'>
      <div className='table__row-title'>{game}</div>
      <div className='table__row-value'>{score}</div>
    </div>
  );
}

function DashboardHistory({ lastPlayed, scoreCards }: DashboardHistoryProps) {
  const { title, imgSrc, ...details } = lastPlayed;

  return (
    <div className='history'>
      <div className='last-played'>
        <p className='title'>Last Played</p>
        <div className='card'>
          <div className='card__content'>
            <div className='image'>
              <img src={imgSrc} alt={title} />
            </div>
            <div className='right'>
              <div className='details'>
                {Object.entries(details).map(([label, value]) => (
                  <Detail
                    key={label}
                    value={value}
                    label={sentencify(capitalize(label))}
                  />
                ))}
              </div>
              <button className='play-again'>Play Again</button>
            </div>
          </div>
          <div className='divider'></div>
        </div>
      </div>
      <div className='score-card'>
        <p className='title'>Score Card - Last {scoreCards.length} Matches</p>
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

export default DashboardHistory;
