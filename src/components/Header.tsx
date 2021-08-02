import styled from 'styled-components';
import HeaderSearch from './HeaderSearch';
import Bell from '../assets/svgs/bell.svg';
import Fikayo from '../assets/images/Fikayo.png';
import Steam from '../assets/images/steam icon.png';
import CaretDown from '../assets/svgs/caretDown.svg';
import Trophy from '../assets/images/trophy icon.png';

const StyledHeader = styled.header`
  top: 0;
  width: 100%;
  height: 10rem;
  position: absolute;
  background-color: white;
  box-shadow: 0px 4px 15px rgba(162, 145, 174, 0.15);

  .content {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 14rem;
  }

  .connect__badges {
    display: flex;
    height: 100%;
    margin-left: 25rem;
    align-items: center;

    @media (max-width: 1680px) {
      margin-left: 18rem;
    }

    .connect__badge {
      height: 4rem;
      display: flex;
      padding: 1rem 2rem 1rem 0;
      font-weight: 500;
      font-size: 1.6rem;
      margin-right: 5rem;

      position: relative;
      border-radius: 6rem;
      align-items: center;
      line-height: 1.8rem;
      justify-content: flex-start;
      background-color: #ede2f5;
      letter-spacing: -0.16500000655651093px;

      img {
        margin-right: 1rem;
      }
    }
  }

  .notification__bell {
    border: none;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    margin-right: 5rem;
    background: url(${Bell}) center;
    background-size: contain;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .avi {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;
      margin-right: 1rem;
      background: url(${Fikayo}) center no-repeat;
      background-size: contain;
    }

    .dropdown {
      width: 1.2rem;
      height: 1.2rem;
      background: url(${CaretDown}) center no-repeat;
      background-size: contain;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section className='content'>
        <HeaderSearch />

        <div className='connect__badges'>
          <div className='connect__badge'>
            <img src={Steam} alt='steam' className='connect__badge-icon' />
            New Challenge
          </div>
          <div className='connect__badge standing'>
            <img src={Trophy} alt='trophy' className='connect__badge-icon' />
            Position: 5<span>th</span>
          </div>
        </div>

        <button className='notification__bell'>&nbsp;</button>

        <div className='profile'>
          <div className='avi'></div>
          <div className='dropdown'></div>
        </div>
      </section>
    </StyledHeader>
  );
}

export default Header;
