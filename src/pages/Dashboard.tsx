import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { RootState } from '../store';
import COD from '../assets/images/COD.png';
import FIFA2 from '../assets/images/FIFA-2.png';
import LiveMatch from '../components/LiveMatch';
import Fikayo from '../assets/images/Fikayo.png';
import Challenges from '../components/Challenges';
import DashboardHistory from '../components/DashboardHistory';

function Dashboard() {
  const [scoreCards, setScoreCards] = useState<ScoreCard[]>([]);
  const [liveMatches, setLiveMatches] = useState<LiveMatch[]>([]);
  const [lastPlayed, setLastPlayed] = useState<LastPlayed | null>(null);
  const username = useSelector((state: RootState) => state.user!.username);

  useEffect(() => {
    async function fetchLastPlayed() {
      setLastPlayed({
        level: 8,
        points: 469,
        title: 'FIFA',
        image: FIFA2,
        ranking: '2nd',
        percentage: '69%',
      });
    }
    fetchLastPlayed();
  }, []);

  useEffect(() => {
    async function fetchLiveMatches() {
      setLiveMatches([
        {
          title: 'FIFA 20 - EA Sports',
          image: COD,
          viewerCount: 8323,
          players: [
            {
              name: 'Fikayo',
              points: 10,
              profileImg: Fikayo,
            },
            {
              name: 'Fikayo',
              points: 10,
              profileImg: Fikayo,
            },
          ],
        },
        {
          title: 'FIFA 20 - EA Sports',
          image: COD,
          viewerCount: 8323,
          players: [
            {
              name: 'Fikayo',
              points: 10,
              profileImg: Fikayo,
            },
            {
              name: 'Fikayo',
              points: 10,
              profileImg: Fikayo,
            },
          ],
        },
        {
          title: 'FIFA 20 - EA Sports',
          image: COD,
          viewerCount: 8323,
          players: [
            {
              name: 'Fikayo',
              points: 10,
              profileImg: Fikayo,
            },
            {
              name: 'Fikayo',
              points: 10,
              profileImg: Fikayo,
            },
          ],
        },
      ]);
    }
    fetchLiveMatches();
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
    <section className='page dashboard'>
      <div className='activities'>
        <p className='title'>
          Welcome, <span className='user'>@{username}</span>
        </p>
        {lastPlayed?.title ? (
          <DashboardHistory lastPlayed={lastPlayed} scoreCards={scoreCards} />
        ) : null}
        <div className='live-matches'>
          <div className='live'>
            <p className='title'>Live Matches</p>
            <div className='live__matches'>
              {liveMatches.map((liveMatch, index) => (
                <LiveMatch key={index} {...liveMatch} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Challenges />
    </section>
  );
}

export default Dashboard;
