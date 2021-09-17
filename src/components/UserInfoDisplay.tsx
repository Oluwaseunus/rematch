import ReactModal from 'react-modal';
import { useQuery } from 'react-query';

import { getFullName } from '../utils';
import { modalStyles } from '../constants';
import GameService from '../api/GameService';
import Fikayo from '../assets/images/Fikayo.png';
import { ReactComponent as CloseIcon } from '../assets/svgs/close.svg';
import { ReactComponent as HomeCheckIcon } from '../assets/svgs/homeCheck.svg';

interface UserInfoDisplayProps {
  user: User;
  closeModal: () => void;
}

function UserInfoGames() {
  const { isLoading, isError, data } = useQuery<UserGame[]>(
    'userInfoGames',
    () => GameService.getUserGames()
  );

  if (isLoading) return <span>Loading games...</span>;

  if (isError) return <span>Couldn't fetch user games</span>;

  if (!data?.length) return null;

  return (
    <ul className='subscribed-games__list'>
      {data.slice(0, 4).map(({ game }) => (
        <li className='subscribed-games__list-item' key={game._id}>
          <img src={game.image} alt={game.name} />
        </li>
      ))}
      {data.length > 4 && (
        <li className='subscribed-games__list-item placeholder'>
          <p>+{data.length - 4}</p>
        </li>
      )}
    </ul>
  );
}

export default function UserInfoDisplay({
  user,
  closeModal,
}: UserInfoDisplayProps) {
  const fullname = getFullName(user);

  return (
    <ReactModal isOpen onRequestClose={closeModal} style={modalStyles}>
      <div className='modal user-info-display-modal'>
        <div className='modal-header'>
          <div className='modal-header-title bold-title'>Info</div>
          <button
            type='button'
            onClick={closeModal}
            className='modal-header-close'
          >
            <CloseIcon />
          </button>
        </div>
        <div className='user-info'>
          <div className='user-info__header'>
            <div className='user-info__profile'>
              <div className='user-info__profile-image'>
                <img src={user.image} alt={fullname} />
              </div>
              <div className='user-info__profile-details'>
                <p className='user-info__profile-fullname'>{fullname}</p>
                <p className='user-info__profile-username'>@{user.username}</p>
              </div>
            </div>
            <button className='user-info__designation'>
              <HomeCheckIcon />
              Friends
            </button>
          </div>
        </div>
        <div className='user-games-info'>
          <div className='user-games-left'>
            <div className='game-stats'>
              <div className='flat-badge'>Game Stats</div>
              <ul className='game-stats__list'>
                <li className='game-stats__list-item'>
                  <p className='game-stats__list-item-title'>Level</p>
                  <p className='game-stats__list-item-value'>8</p>
                </li>
                <li className='game-stats__list-item'>
                  <p className='game-stats__list-item-title'>Rank</p>
                  <p className='game-stats__list-item-value'>
                    2<sup>nd</sup>
                  </p>
                </li>
                <li className='game-stats__list-item'>
                  <p className='game-stats__list-item-title'>Points</p>
                  <p className='game-stats__list-item-value'>469</p>
                </li>
              </ul>
            </div>
            <div className='last-5-games'>
              <div className='flat-badge'>Last 5 Games</div>
              <ul className='last-5-games__list'>
                <li className='last-5-games__list-item'>
                  <div className='last-5-games__list-item-users'>
                    <div className='last-5-games__list-item-user'>
                      <img src={Fikayo} alt='Fikayo' />
                    </div>
                    <div className='last-5-games__list-item-scores'>
                      <p>
                        <span>3</span> : <span>2</span>
                      </p>
                    </div>
                    <div className='last-5-games__list-item-user'>
                      <img src={Fikayo} alt='Fikayo' />
                    </div>
                  </div>
                  <p className='last-5-games__list-item-winner'>@ddtripzz</p>
                </li>
                <li className='last-5-games__list-item'>
                  <div className='last-5-games__list-item-users'>
                    <div className='last-5-games__list-item-user'>
                      <img src={Fikayo} alt='Fikayo' />
                    </div>
                    <div className='last-5-games__list-item-scores'>
                      <p>
                        <span>3</span> : <span>2</span>
                      </p>
                    </div>
                    <div className='last-5-games__list-item-user'>
                      <img src={Fikayo} alt='Fikayo' />
                    </div>
                  </div>
                  <p className='last-5-games__list-item-winner'>@ddtripzz</p>
                </li>
                <li className='last-5-games__list-item'>
                  <div className='last-5-games__list-item-users'>
                    <div className='last-5-games__list-item-user'>
                      <img src={Fikayo} alt='Fikayo' />
                    </div>
                    <div className='last-5-games__list-item-scores'>
                      <p>
                        <span>3</span> : <span>2</span>
                      </p>
                    </div>
                    <div className='last-5-games__list-item-user'>
                      <img src={Fikayo} alt='Fikayo' />
                    </div>
                  </div>
                  <p className='last-5-games__list-item-winner'>@ddtripzz</p>
                </li>
                <li className='last-5-games__list-item'>
                  <div className='last-5-games__list-item-users'>
                    <div className='last-5-games__list-item-user'>
                      <img src={Fikayo} alt='Fikayo' />
                    </div>
                    <div className='last-5-games__list-item-scores'>
                      <p>
                        <span>3</span> : <span>2</span>
                      </p>
                    </div>
                    <div className='last-5-games__list-item-user'>
                      <img src={Fikayo} alt='Fikayo' />
                    </div>
                  </div>
                  <p className='last-5-games__list-item-winner'>@ddtripzz</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='user-games-right'>
            <div className='win-stats'>
              <div className='flat-badge'>Win Stats</div>
              <div className='win-stats__chart'></div>
              <ul className='win-stats__details'>
                <li className='win-stats__details-item'>
                  <p className='win-stats__details-item-title'>
                    <div className='win-stats__details-item-indicator win'>
                      &nbsp;
                    </div>
                    Win
                  </p>
                  <p className='win-stats__details-item-value'>62%</p>
                </li>
                <li className='win-stats__details-item'>
                  <p className='win-stats__details-item-title'>
                    <div className='win-stats__details-item-indicator loss'>
                      &nbsp;
                    </div>
                    Loss
                  </p>
                  <p className='win-stats__details-item-value'>33%</p>
                </li>
                <li className='win-stats__details-item'>
                  <p className='win-stats__details-item-title'>
                    <div className='win-stats__details-item-indicator draw'>
                      &nbsp;
                    </div>
                    Draw
                  </p>
                  <p className='win-stats__details-item-value'>5%</p>
                </li>
              </ul>
            </div>
            <div className='subscribed-games'>
              <div className='flat-badge'>Subscribed Games</div>
              <UserInfoGames />
            </div>
          </div>
        </div>
        <button className='primary'>Challenge</button>
      </div>
    </ReactModal>
  );
}
