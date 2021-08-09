import Steam from '../assets/images/steam icon.png';
import Cog from '../assets/svgs/cog.svg';
import { ReactComponent as Dropdown } from '../assets/svgs/dropdown.svg';

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
            <p className='connect__badge-title'>New Challenge</p>
          </div>
          <div className='connect__badge current'>
            <img src={Cog} alt='Current Game' className='connect__badge-icon' />
            <p className='connect__badge-title'>FIFA 21</p>
            <Dropdown className='connect__badge-dropdown' />
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
