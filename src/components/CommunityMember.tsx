import styled from 'styled-components';

const StyledMember = styled.div`
  display: flex;
  height: 3.5rem;
  font-weight: 600;
  line-height: 2rem;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  .community__member-image {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    margin-right: 1.5rem;
    border: 1px solid var(--text-purple);

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      object-fit: contain;
      transform: translate(-50%, -50%);
    }
  }

  .community__member-name {
    margin-right: auto;
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: inherit;
    color: var(--primary-color);
  }
`;

function CommunityMember({ name, imgSrc }: CommunityMember) {
  return (
    <StyledMember>
      <div className='community__member-image'>
        <img src={imgSrc} alt={name} />
      </div>
      <div className='community__member-name'>{name}</div>
      <button>Challenge</button>
    </StyledMember>
  );
}

export default CommunityMember;
