import { useState, useEffect } from 'react';

import COD from '../assets/images/COD.png';
import FIFA2 from '../assets/images/FIFA-2.png';
import DashboardHistory from '../components/DashboardHistory';

function Dashboard() {
  const [scoreCards, setScoreCards] = useState<ScoreCard[]>([]);
  const [lastPlayed, setLastPlayed] = useState<LastPlayed | null>(null);

  // fetch last played effect
  useEffect(() => {
    async function fetchLastPlayed() {
      setLastPlayed({
        level: 4,
        played: 20,
        points: 120,
        title: 'FIFA',
        imgSrc: FIFA2,
        ranking: '3rd',
        winRatio: '4:1',
        percentage: '23%',
      });
    }
    fetchLastPlayed();
  }, []);

  useEffect(() => {
    setScoreCards([
      { game: 'FIFA 20', score: '4 - 3' },
      { game: 'FIFA 20', score: '4 - 3' },
      { game: 'FIFA 20', score: '4 - 3' },
      { game: 'FIFA 20', score: '4 - 3' },
      { game: 'FIFA 20', score: '4 - 3' },
    ]);
  }, []);

  return (
    <section className='dashboard'>
      <div className='activities'>
        {lastPlayed?.title ? (
          <DashboardHistory lastPlayed={lastPlayed} scoreCards={scoreCards} />
        ) : null}
        <div className='live-matches'>
          <div className='live'>
            <p className='title'>Live Matches</p>
            <div className='live__matches'>
              <div className='live__match'>
                <div className='live__match-image'>
                  <img src={COD} alt='Call of Duty' />
                  <div className='label label__live'>&#9679; Live</div>
                  <div className='label label__viewers'>
                    <img src='./src/assets/svgs/eye.svg' alt='Viewers' />
                    8.2K
                  </div>
                </div>
                <div className='live__match-details'>
                  <p className='live__match-title'>FIFA 20 - EA Sports</p>
                  <div className='live__match-players'>
                    <div className='live__match-player'>
                      <div className='live__match-player-avatar'>
                        <img
                          src='./src/assets/images/Fikayo.png'
                          alt='Fikayo'
                        />
                      </div>
                      <span className='live__match-player-name'>Fikayo</span>
                      <span className='live__match-player-points'>10pts</span>
                    </div>
                    <p className='live__match-versus'>Vs</p>
                    <div className='live__match-player'>
                      <div className='live__match-player-avatar'>
                        <img
                          src='./src/assets/images/Fisayo.png'
                          alt='Fikayo'
                        />
                      </div>
                      <span className='live__match-player-name'>Fikayo</span>
                      <span className='live__match-player-points'>10pts</span>
                    </div>
                  </div>
                  <div className='divider'></div>
                  <button className='secondary'>Watch Live</button>
                </div>
              </div>
              <div className='live__match'>
                <div className='live__match-image'>
                  <img src='./src/assets/images/COD.png' alt='Call of Duty' />
                  <div className='label label__live'>&#9679; Live</div>
                  <div className='label label__viewers'>
                    <img src='./src/assets/svgs/eye.svg' alt='Viewers' />
                    8.2K
                  </div>
                </div>
                <div className='live__match-details'>
                  <p className='live__match-title'>FIFA 20 - EA Sports</p>
                  <div className='live__match-players'>
                    <div className='live__match-player'>
                      <div className='live__match-player-avatar'>
                        <img
                          src='./src/assets/images/Fikayo.png'
                          alt='Fikayo'
                        />
                      </div>
                      <span className='live__match-player-name'>Fikayo</span>
                      <span className='live__match-player-points'>10pts</span>
                    </div>
                    <p className='live__match-versus'>Vs</p>
                    <div className='live__match-player'>
                      <div className='live__match-player-avatar'>
                        <img
                          src='./src/assets/images/Fisayo.png'
                          alt='Fikayo'
                        />
                      </div>
                      <span className='live__match-player-name'>Fikayo</span>
                      <span className='live__match-player-points'>10pts</span>
                    </div>
                  </div>
                  <div className='divider'></div>
                  <button className='secondary'>Watch Live</button>
                </div>
              </div>
              <div className='live__match'>
                <div className='live__match-image'>
                  <img src='./src/assets/images/COD.png' alt='Call of Duty' />
                  <div className='label label__live'>&#9679; Live</div>
                  <div className='label label__viewers'>
                    <img src='./src/assets/svgs/eye.svg' alt='Viewers' />
                    8.2K
                  </div>
                </div>
                <div className='live__match-details'>
                  <p className='live__match-title'>FIFA 20 - EA Sports</p>
                  <div className='live__match-players'>
                    <div className='live__match-player'>
                      <div className='live__match-player-avatar'>
                        <img
                          src='./src/assets/images/Fikayo.png'
                          alt='Fikayo'
                        />
                      </div>
                      <span className='live__match-player-name'>Fikayo</span>
                      <span className='live__match-player-points'>10pts</span>
                    </div>
                    <p className='live__match-versus'>Vs</p>
                    <div className='live__match-player'>
                      <div className='live__match-player-avatar'>
                        <img
                          src='./src/assets/images/Fisayo.png'
                          alt='Fikayo'
                        />
                      </div>
                      <span className='live__match-player-name'>Fikayo</span>
                      <span className='live__match-player-points'>10pts</span>
                    </div>
                  </div>
                  <div className='divider'></div>
                  <button className='secondary'>Watch Live</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='challenges'>
        <div className='challenge__list upcoming'>
          <h3 className='title'>Upcoming Challenges</h3>
          <div className='challenge__list-items'>
            <div className='challenge__list-item'>
              <div className='challenge__list-item-image'>
                <img
                  src='./src/assets/images/The Witcher.png'
                  alt='The Witcher'
                />
              </div>
              <div className='challenge__list-item-details'>
                <div className='challenge__list-item-identifier'>
                  <p className='challenge__list-item-title'>
                    The Witcher: Wild Hunt
                  </p>
                  <p className='challenge__list-item-challenger'>
                    Challenged by:
                    <span className='challenge__list-item-challenger-name'>
                      Fikayo Sanni
                    </span>
                  </p>
                </div>
                <p className='challenge__list-item-time'>
                  00 Days : 16 Hrs : 53 Mins
                </p>
              </div>
              <div className='challenge__list-item-points'>8pts</div>
            </div>
            <div className='challenge__list-item'>
              <div className='challenge__list-item-image'>
                <img
                  src='./src/assets/images/The Witcher.png'
                  alt='The Witcher'
                />
              </div>
              <div className='challenge__list-item-details'>
                <div className='challenge__list-item-identifier'>
                  <p className='challenge__list-item-title'>
                    The Witcher: Wild Hunt
                  </p>
                  <p className='challenge__list-item-challenger'>
                    Challenged by:
                    <span className='challenge__list-item-challenger-name'>
                      Fikayo Sanni
                    </span>
                  </p>
                </div>
                <p className='challenge__list-item-time'>
                  00 Days : 16 Hrs : 53 Mins
                </p>
              </div>
              <div className='challenge__list-item-points'>8pts</div>
            </div>
            <div className='challenge__list-item'>
              <div className='challenge__list-item-image'>
                <img
                  src='./src/assets/images/The Witcher.png'
                  alt='The Witcher'
                />
              </div>
              <div className='challenge__list-item-details'>
                <div className='challenge__list-item-identifier'>
                  <p className='challenge__list-item-title'>
                    The Witcher: Wild Hunt
                  </p>
                  <p className='challenge__list-item-challenger'>
                    Challenged by:
                    <span className='challenge__list-item-challenger-name'>
                      Fikayo Sanni
                    </span>
                  </p>
                </div>
                <p className='challenge__list-item-time'>
                  00 Days : 16 Hrs : 53 Mins
                </p>
              </div>
              <div className='challenge__list-item-points'>8pts</div>
            </div>
          </div>
        </div>
        <div className='challenge__list open'>
          <h3 className='title'>Open Challenges</h3>
          <div className='challenge__filter'>
            <p>Showing:</p>
            <div className='select'>
              <select name='showing' id='showing'>
                <option value='all' selected>
                  All
                </option>
              </select>
              {/* <img src="./src/assets/svgs/dropdown.svg" alt="Dropdown" /> */}
            </div>
          </div>
          <div className='challenge__list-items'>
            <div className='challenge__list-item'>
              <div className='challenge__list-item-image'>
                <img
                  src='./src/assets/images/Tomb Raider.png'
                  alt='The Witcher'
                />
              </div>
              <div className='challenge__list-item-details'>
                <div className='challenge__list-item-identifier'>
                  <p className='challenge__list-item-title'>
                    The Witcher: Wild Hunt
                  </p>
                  <p className='challenge__list-item-challenger'>
                    Challenged by:
                    <span className='challenge__list-item-challenger-name'>
                      Fikayo Sanni
                    </span>
                  </p>
                </div>
              </div>
              <div className='challenge__list-item-points'>8pts</div>
            </div>
            <div className='challenge__list-item'>
              <div className='challenge__list-item-image'>
                <img
                  src='./src/assets/images/Tomb Raider.png'
                  alt='The Witcher'
                />
              </div>
              <div className='challenge__list-item-details'>
                <div className='challenge__list-item-identifier'>
                  <p className='challenge__list-item-title'>
                    The Witcher: Wild Hunt
                  </p>
                  <p className='challenge__list-item-challenger'>
                    Challenged by:
                    <span className='challenge__list-item-challenger-name'>
                      Fikayo Sanni
                    </span>
                  </p>
                </div>
              </div>
              <div className='challenge__list-item-points'>8pts</div>
            </div>
            <div className='challenge__list-item'>
              <div className='challenge__list-item-image'>
                <img
                  src='./src/assets/images/Tomb Raider.png'
                  alt='The Witcher'
                />
              </div>
              <div className='challenge__list-item-details'>
                <div className='challenge__list-item-identifier'>
                  <p className='challenge__list-item-title'>
                    The Witcher: Wild Hunt
                  </p>
                  <p className='challenge__list-item-challenger'>
                    Challenged by:
                    <span className='challenge__list-item-challenger-name'>
                      Fikayo Sanni
                    </span>
                  </p>
                </div>
              </div>
              <div className='challenge__list-item-points'>8pts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
