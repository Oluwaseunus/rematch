import { ReactComponent as CloseButton } from '../assets/svgs/x.svg';

const SidebarCard = () => {
  return (
    <div className='sidebar-card'>
      <button className='exit'>
        <CloseButton />
      </button>
      <div className='progress-bar'>
        <div className='progress-bar__completed'></div>
      </div>
    </div>
  );
};

export default SidebarCard;
