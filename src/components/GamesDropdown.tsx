interface GamesDropdownProps {
  setCurrentGame: (game: string) => void;
}

export default function GamesDropdown({ setCurrentGame }: GamesDropdownProps) {
  return (
    <ul className='games__dropdown'>
      <li onClick={() => setCurrentGame('FIFA 21')}>FIFA 21</li>
      <li onClick={() => setCurrentGame('Fortnite')}>Fortnite</li>
      <li onClick={() => setCurrentGame('GTA V')}>GTA V</li>
      <li onClick={() => setCurrentGame('Call of Duty')}>Call of Duty</li>
      <li onClick={() => setCurrentGame('The Witcher')}>The Witcher</li>
    </ul>
  );
}
