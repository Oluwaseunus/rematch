import TheWitcher from '../assets/images/The Witcher.png';
import TombRaider from '../assets/images/Tomb Raider.png';

export default function Challenges() {
  return (
    <div className='challenges right-sidebar'>
      <div className='challenge__list upcoming'>
        <h3 className='title'>Upcoming Challenges</h3>
        <div className='challenge__list-items'>
          <div className='challenge__list-item'>
            <div className='challenge__list-item-image'>
              <img src={TheWitcher} alt='The Witcher' />
            </div>
            <div className='challenge__list-item-details'>
              <div className='challenge__list-item-identifier'>
                <p className='challenge__list-item-title'>
                  The Witcher: Wild Hunt
                </p>
                <p className='challenge__list-item-challenger'>
                  Challenged by:{' '}
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
              <img src={TheWitcher} alt='The Witcher' />
            </div>
            <div className='challenge__list-item-details'>
              <div className='challenge__list-item-identifier'>
                <p className='challenge__list-item-title'>
                  The Witcher: Wild Hunt
                </p>
                <p className='challenge__list-item-challenger'>
                  Challenged by:{' '}
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
              <img src={TheWitcher} alt='The Witcher' />
            </div>
            <div className='challenge__list-item-details'>
              <div className='challenge__list-item-identifier'>
                <p className='challenge__list-item-title'>
                  The Witcher: Wild Hunt
                </p>
                <p className='challenge__list-item-challenger'>
                  Challenged by:{' '}
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
            {/* <img src="../assets/svgs/dropdown.svg" alt="Dropdown" /> */}
          </div>
        </div>
        <div className='challenge__list-items'>
          <div className='challenge__list-item'>
            <div className='challenge__list-item-image'>
              <img src={TombRaider} alt='The Witcher' />
            </div>
            <div className='challenge__list-item-details'>
              <div className='challenge__list-item-identifier'>
                <p className='challenge__list-item-title'>
                  The Witcher: Wild Hunt
                </p>
                <p className='challenge__list-item-challenger'>
                  Challenged by:{' '}
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
              <img src={TombRaider} alt='The Witcher' />
            </div>
            <div className='challenge__list-item-details'>
              <div className='challenge__list-item-identifier'>
                <p className='challenge__list-item-title'>
                  The Witcher: Wild Hunt
                </p>
                <p className='challenge__list-item-challenger'>
                  Challenged by:{' '}
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
              <img src={TombRaider} alt='The Witcher' />
            </div>
            <div className='challenge__list-item-details'>
              <div className='challenge__list-item-identifier'>
                <p className='challenge__list-item-title'>
                  The Witcher: Wild Hunt
                </p>
                <p className='challenge__list-item-challenger'>
                  Challenged by:{' '}
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
  );
}
