import styled from 'styled-components';
import CommunityMember from './CommunityMember';

interface SidebarCommunityProps {
  members: CommunityMember[];
}

const StyledSidebarCommunity = styled.div`
  padding: 0 3rem;
  font-size: 1.4rem;
  margin-bottom: 9rem;
  color: var(--text-grey);

  h3 {
    font-weight: 500;
    line-height: 1.8rem;
    margin: 4rem 0 2rem;
  }
`;

const SidebarCommunity = ({ members }: SidebarCommunityProps) => {
  return (
    <StyledSidebarCommunity>
      <h3>Community</h3>

      <div className='community__members'>
        {members.map((member) => (
          <CommunityMember key={member._id} {...member} />
        ))}
      </div>
    </StyledSidebarCommunity>
  );
};

export default SidebarCommunity;
