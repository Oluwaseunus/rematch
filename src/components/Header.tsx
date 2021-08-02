import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 0;

  .logo {
    padding: 2rem 0;
    font-weight: 700;
    font-size: 2.4rem;
    margin-right: 4rem;
    line-height: 3.6rem;
    text-transform: uppercase;
    font-family: 'Beleren Bold';
  }

  .hamburger {
    background: url('./assets/svgs/hamburger.svg') center no-repeat;
    width: 2rem;
    height: 2rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader className='header'>
      <h1 className='logo'>PlayRematch</h1>

      <div className='hamburger'></div>
    </StyledHeader>
  );
};

export default Header;
