import Steam from '../assets/images/steam icon.png';
import Trophy from '../assets/images/trophy icon.png';

function Header() {
  return (
    <header>
      <section className='content'>
        <div className='header__search'>
          <input type='text' placeholder='Search game' />
        </div>

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
    </header>
  );
}

export default Header;
