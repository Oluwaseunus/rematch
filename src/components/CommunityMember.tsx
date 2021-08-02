export default function CommunityMember({ name, imgSrc }: CommunityMember) {
  return (
    <div className='community__member'>
      <div className='community__member-image'>
        <img src={imgSrc} alt={name} />
      </div>
      <div className='community__member-name'>{name}</div>
      <button>Challenge</button>
    </div>
  );
}
