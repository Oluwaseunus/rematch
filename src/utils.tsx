export const capitalize = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

export const sentencify = (string: string): string => {
  return string
    .split('')
    .map((character, index) => {
      if (index === 0) {
        return character.toUpperCase();
      } else {
        return character.charCodeAt(0) >= 97 ? character : ` ${character}`;
      }
    })
    .join('');
};
