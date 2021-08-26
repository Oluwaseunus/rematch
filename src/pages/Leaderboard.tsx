import Fikayo from '../assets/images/Fikayo.png';
import { ReactComponent as CancelIcon } from '../assets/svgs/x.svg';
import { ReactComponent as UpIcon } from '../assets/svgs/polygonUp.svg';

export default function Leaderboard() {
  return (
    <section className='page leaderboard'>
      <div className='page__container'>
        <h2 className='title'>Leaderboard</h2>

        <div className='info__badge'>
          <p>
            The leaderboard is updated everyday. Additional information here to
            fill up space because why not, if not?
          </p>
          <CancelIcon className='info__badge-icon' />
        </div>

        <div className='leadeboards'>
          <div className='leaderboard__container'>
            <p className='leaderboard__title'>Leaderboard - Level 1</p>
            <div className='divider'></div>
            <div role='table' className='leaderboard__content'>
              <div role='rowgroup' className='leaderboard__content-header'>
                <div role='row'>
                  <p role='columnheader'>Rank</p>
                  <p role='columnheader'>Name</p>
                  <p role='columnheader'>Points (Week)</p>
                  <p role='columnheader'>Total Points</p>
                  <p role='columnheader'>Change</p>
                </div>
              </div>
              <div role='rowgroup' className='leaderboard__content-body'>
                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-1'>
                      1
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>

                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-2'>
                      2
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>
                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-3'>
                      3
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>
                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-4'>
                      4
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>
                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-5'>
                      5
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>
                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-6'>
                      6
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>
                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-7'>
                      7
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>
                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-8'>
                      8
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>
                <div role='row'>
                  <div role='cell'>
                    <p className='leaderboard__entry-rank leaderboard__entry-rank-9'>
                      9
                    </p>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-profile'>
                      <div className='leaderboard__entry-image'>
                        <img src={Fikayo} alt='Fikayo' />
                      </div>
                      <div className='leaderboard__entry-details'>
                        <p className='leaderboard__entry-username'>@thebizzz</p>
                        <span className='leaderboard__entry-fullname'>
                          Alonso Perez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div role='cell'>
                    280 <span>points</span>
                  </div>
                  <div role='cell'>
                    2800 <span>points</span>
                  </div>
                  <div role='cell'>
                    <div className='leaderboard__entry-ranking'>
                      <UpIcon width={18} height={12} />
                      <p> 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
