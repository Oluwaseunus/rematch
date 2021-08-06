import { useEffect, useState } from 'react';
import GameService from '../api/GameService';

export default function Onboarding() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchGames() {
      const games = await GameService.getGames();
      setGames(games);
    }
    fetchGames();
  }, []);

  function selectGame(id: string) {
    return function () {
      const index = selectedIds.findIndex(_id => _id === id);

      if (index !== -1) {
        setSelectedIds(selectedIds.filter(_id => _id !== id));
      } else if (index === -1 && selectedIds.length < 2) {
        setSelectedIds([...selectedIds, id]);
      }
    };
  }

  return (
    <div className='onboarding'>
      <div className='onboarding__hero'>
        <div className='onboarding__hero-text'>
          <p className='onboarding__hero-tagline'>Let's get you started</p>
          <h1 className='onboarding__hero-title'>
            Select at least one game to get started with
          </h1>
        </div>
      </div>
      <div className='onboarding__games'>
        <div className='onboarding__filters'>
          <div className='onboarding__filters-input'>
            <input type='text' placeholder='Search game titles' name='title' />
          </div>
          <div className='onboarding__filters-dropdown'>
            <p className='onboarding__filters-dropdown-label'>Showing: </p>
            <div className='select'>
              <select name='showing' id='showing'>
                <option value='all' selected>
                  All games
                </option>
              </select>
              {/* <img src="../assets/svgs/dropdown.svg" alt="Dropdown" /> */}
            </div>
          </div>
        </div>
        <div className='onboarding__games-list'>
          {games.map(game => {
            let className = 'onboarding__game';
            if (selectedIds.includes(game._id)) {
              className += ' selected';
            }

            return (
              <div
                key={game._id}
                className={className}
                aria-label={game.name}
                onClick={selectGame(game._id)}
              >
                <img src={game.image} alt={game.name} />
              </div>
            );
          })}
        </div>
        <div className='cta'>
          <button className='primary'>Continue</button>
        </div>
      </div>
    </div>
  );
}
