import { useState, useEffect } from 'react';
import GameService from '../api/GameService';

export default function MyGames() {
  const [, setUserGames] = useState<UserGame[]>([]);

  useEffect(() => {
    async function fetchUserGames() {
      const games = await GameService.getUserGames();
      setUserGames(games);
    }
    fetchUserGames();
  }, []);

  return (
    <section className='page games'>
      <ul className='user__games'>
        {/* {userGames.map(({ game }) => (
          <li key={game._id}>{game.name}</li>
        ))} */}
      </ul>
    </section>
  );
}
