import styled from 'styled-components';
import FIFA from '../assets/images/FIFA.png';
import { ReactComponent as CloseButton } from '../assets/svgs/x.svg';

const StyledSidebarCard = styled.div`
  width: 25.6rem;
  height: 34.7rem;
  margin: 0 4.4rem 2rem;
  position: relative;
  border-radius: 2.4rem;
  background: url(${FIFA});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  button {
    display: flex;
    position: absolute;
    align-items: center;
    font-family: inherit;
    justify-content: center;

    &.exit {
      top: 1.6rem;
      color: white;
      width: 2.6rem;
      right: 1.6rem;
      height: 2.6rem;
      border-radius: 50%;
      backdrop-filter: blur(54.3656px);
      background: rgba(37, 37, 37, 0.78);
    }

    &.add {
      right: 50%;
      border: none;
      color: white;
      width: 21rem;
      bottom: 1.6rem;
      background: none;
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 2.7rem;
      padding: 1.2rem 3rem;
      border-radius: 10rem;
      transform: translateX(50%);
      background: var(--primary-color);
    }
  }
`;

const SidebarCard = () => {
  return (
    <StyledSidebarCard>
      <button className='exit'>
        <CloseButton />
      </button>
      <button className='add'>Add Game</button>
    </StyledSidebarCard>
  );
};

export default SidebarCard;
