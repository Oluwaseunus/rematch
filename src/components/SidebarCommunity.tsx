import CommunityMember from './CommunityMember';

interface SidebarCommunityProps {
  members: CommunityMember[];
}

const SidebarCommunity = ({ members }: SidebarCommunityProps) => {
  return (
    <div className='sidebar-community'>
      <h3>Community</h3>

      <div className='community__members'>
        {members.map(member => (
          <CommunityMember key={member._id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default SidebarCommunity;
