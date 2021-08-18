import { useState, useEffect } from 'react';

import GameService from '../api/GameService';
import { ReactComponent as ChevronRight } from '../assets/svgs/chevronRight.svg';

function UserGame({ name, image }: Game) {
  return (
    <li className='user__game' aria-label={name}>
      <img src={image} alt={name} className='user__game-image' />
    </li>
  );
}

export default function MyGames() {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [userGames, setUserGames] = useState<UserGame[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchUserGames() {
      const games = await GameService.getUserGames();
      setUserGames(games);
    }
    fetchUserGames();
  }, []);

  useEffect(() => {
    async function fetchAllGames() {
      const games = await GameService.getGames();
      const categories = Array.from(
        new Set(games.map(({ category: { name } }) => name))
      ).sort();
      setAllGames(games);
      setCategories(categories);
    }
    fetchAllGames();
  }, []);

  return (
    <section className='page games'>
      <div className='games__container'>
        <h2 className='title'>My Games</h2>
        <ul className='user__games'>
          {userGames.map(userGame => (
            <UserGame key={userGame.game._id} {...userGame.game} />
          ))}
        </ul>

        <div className='all__games'>
          <h2 className='title'>All Games</h2>
          <div className='all__games-filters'>
            <div className='all__games-categories'>
              <button type='button' className='all__games-category selected'>
                <span className='all__games-category-text'>All</span>
              </button>
              {categories.slice(0, 2).map(category => (
                <button
                  type='button'
                  key={category}
                  className='all__games-category'
                >
                  <span className='all__games-category-text'>{category}</span>
                </button>
              ))}
              <button type='button' className='all__games-category'>
                <span className='all__games-category-text'>
                  <ChevronRight />
                </span>
              </button>
            </div>
            <div className='all__games-search'>
              <input type='text' name='search' placeholder='Search games' />
            </div>
          </div>
          <ul className='all__games-list'>
            {allGames.map(game => (
              <UserGame key={game._id} {...game} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
