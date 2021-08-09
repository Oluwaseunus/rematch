import React, { useEffect, useState } from 'react';

import GameService from '../api/GameService';
import { stringLowerCaseIncludes } from '../utils';

export default function Onboarding() {
  const [search, setSearch] = useState('');
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchGames() {
      const games = await GameService.getGames();
      setAllGames(games);
    }
    fetchGames();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

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

  const filteredGames = allGames.filter(({ name }) =>
    stringLowerCaseIncludes(name, search)
  );

  return (
    <div className='onboarding'>
      <div className='onboarding__hero'>
        <div className='onboarding__hero-text'>
          <p className='onboarding__hero-tagline'>Let's get you started</p>
          <h1 className='onboarding__hero-title'>
            Select at most two games to get started with
          </h1>
        </div>
      </div>
      <div className='onboarding__games'>
        <div className='onboarding__filters'>
          <div className='onboarding__filters-input'>
            <input
              type='text'
              name='title'
              value={search}
              onChange={handleChange}
              placeholder='Search game titles'
            />
          </div>
          <div className='onboarding__filters-dropdown'>
            <p className='onboarding__filters-dropdown-label'>Showing: </p>
            <div className='select'>
              <select name='showing' id='showing' defaultValue='all'>
                <option value='all'>All games</option>
              </select>
              {/* <img src="../assets/svgs/dropdown.svg" alt="Dropdown" /> */}
            </div>
          </div>
        </div>
        <div className='onboarding__games-list'>
          {filteredGames.map(game => {
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
