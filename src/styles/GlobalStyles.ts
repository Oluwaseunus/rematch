import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --grey: #cbc4d2;
  --white: #cbc4d2;
  --accent: #88d551;
  --subtitle: #cbc4d2;
  --text-grey: #807589;
  --text-purple: #221a28;
  --primary-dark: #652494;
  --primary-color: #9e51d5;
  --primary-light: #b38ae5;
  --primary-lighter: #d1adeb;
  --secondary-light: #dad6f9;
  --text-purple-light: #cbc4d2;
  --btn-stroke: rgba(128, 117, 137, 0.4);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-size: 7px;
  font-family: Inter, sans-serif;

  @media (min-width: 1425px) {
    font-size: 7.5px;
  }

  @media (min-width: 1680px) {
    font-size: 9px;
  }

  @media (min-width: 1920px) {
    font-size: 10px;
  }
}

body {
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
}

#root {
  display: flex;
}
`;

export default GlobalStyles;
