export const capitalize = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

export const formatNumber = (number: number): string => {
  return (number > 1000 ? (number / 1000).toFixed(1) : number) + 'K';
};

export const getFullName = (user: User) => {
  return user.firstName + ' ' + user.lastName;
};

export const getRedirectUrl = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('redirectTo') || '/app/dashboard';
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

export const stringLowerCaseIncludes = (
  stringToCheck: string,
  testValue: string
) => {
  return new RegExp(testValue, 'i').test(stringToCheck);
};
