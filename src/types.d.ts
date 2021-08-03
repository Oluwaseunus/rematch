interface Challenge {
  gameTitle: string;
}

interface CommunityMember {
  _id: string;
  name: string;
  image: string;
}

interface LastPlayed {
  image: string;
  title: string;
  level: number;
  points: number;
  played: number;
  ranking: string;
  winRatio: string;
  percentage: string;
}

interface LiveMatch {
  image: string;
  title: string;
  viewerCount: number;
  players: LiveMatchPlayer[];
}

interface LiveMatchPlayer {
  name: string;
  points: number;
  profileImg: string;
}

interface ScoreCard {
  game: string;
  score: string;
}

interface User {
  _id: string;
  email: string;
  image: string;
  lastName: string;
  firstName: string;
}
