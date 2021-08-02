import { ReactComponent as CloseButton } from '../assets/svgs/x.svg';

const SidebarCard = () => {
  return (
    <div className='sidebar-card'>
      <button className='exit'>
        <CloseButton />
      </button>
      <button className='add'>Add Game</button>
    </div>
  );
};

export default SidebarCard;
