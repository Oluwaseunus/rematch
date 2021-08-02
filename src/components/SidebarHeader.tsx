import styled from 'styled-components';
import Hamburger from '../assets/svgs/hamburger.svg';

const StyledSidebarHeader = styled.div`
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
    background: url(${Hamburger}) center no-repeat;
    width: 2rem;
    height: 2rem;
  }
`;

function SidebarHeader() {
  return (
    <StyledSidebarHeader className='header'>
      <h1 className='logo'>PlayRematch</h1>

      <div className='hamburger'></div>
    </StyledSidebarHeader>
  );
}

export default SidebarHeader;
