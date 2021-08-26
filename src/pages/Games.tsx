import React, { useState, useEffect } from 'react';

import GameService from '../api/GameService';
import { stringLowerCaseIncludes } from '../utils';

function UserGame({ name, image }: Game) {
  return (
    <li className='user__game' aria-label={name}>
      <img src={image} alt={name} className='user__game-image' />
    </li>
  );
}

export default function MyGames() {
  const [search, setSearch] = useState('');
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [activeCategory, setActiveCategory] = useState('');
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

  function generateButtonClassName(category: string): string {
    let classname = 'all__games-category';
    if (category === activeCategory) classname += ' selected';
    return classname;
  }

  function handleButtonClick(category: string) {
    return function (e: React.MouseEvent<HTMLButtonElement>) {
      (e.target as HTMLElement).closest('button')?.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
      });
      setActiveCategory(category);
    };
  }

  return (
    <section className='page games'>
      <div className='page__container'>
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
              <button
                type='button'
                onClick={handleButtonClick('')}
                className={generateButtonClassName('')}
              >
                <span className='all__games-category-text'>All</span>
              </button>
              {categories.map(category => (
                <button
                  type='button'
                  key={category}
                  onClick={handleButtonClick(category)}
                  className={generateButtonClassName(category)}
                >
                  <span className='all__games-category-text'>{category}</span>
                </button>
              ))}
            </div>
            <div className='all__games-search'>
              <input
                type='text'
                name='search'
                value={search}
                placeholder='Search games'
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <ul className='all__games-list'>
            {allGames
              .filter(game => {
                // activeCategory will be an empty string when 'all' is selected.
                // if activeCategory is empty, don't bother checking the values, just return all valid games.
                // else, check if the game's category is the same as the active category,
                // and if the game's title/name matches the search string.

                let categoryIsCorrect = true;

                if (activeCategory) {
                  categoryIsCorrect = activeCategory === game.category.name;
                }

                return (
                  categoryIsCorrect &&
                  stringLowerCaseIncludes(game.name, search)
                );
              })
              .map(game => (
                <UserGame key={game._id} {...game} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
