import styled from 'styled-components';
import SearchIcon from '../assets/svgs/magnifyingGlass.svg';

const StyledHeaderSearch = styled.div`
  width: 57.5rem;
  height: 5rem;
  border-radius: 2.5rem;
  margin: 3.2rem 7.2rem;
  margin-right: 0;
  position: relative;
  background-color: white;
  border: 0.5px solid rgba(131, 131, 131, 0.3);

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.75rem;
    background: none;
    font-weight: 400;
    margin: 0 20rem 0 5rem;
    line-height: 21px;
    position: relative;
    font-family: inherit;
    color: var(--text-grey);
  }

  &::before {
    top: 50%;
    left: 3%;
    content: '';
    width: 2rem;
    height: 2rem;
    position: absolute;
    background-size: cover;
    transform: translateY(-50%);
    background: url(${SearchIcon}) center no-repeat;
  }
`;

function HeaderSearch() {
  return (
    <StyledHeaderSearch>
      <input type='text' placeholder='Search game' />
    </StyledHeaderSearch>
  );
}

export default HeaderSearch;
