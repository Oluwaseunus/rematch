interface CommunityMember {
  _id: string;
  name: string;
  imgSrc: string;
}

interface LastPlayed {
  title: string;
  level: number;
  imgSrc: string;
  points: number;
  played: number;
  ranking: string;
  winRatio: string;
  percentage: string;
}

interface ScoreCard {
  game: string;
  score: string;
}
