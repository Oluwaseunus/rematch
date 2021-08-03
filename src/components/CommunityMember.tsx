export default function CommunityMember({ name, image }: CommunityMember) {
  return (
    <div className='community__member'>
      <div className='community__member-image'>
        <img src={image} alt={name} />
      </div>
      <div className='community__member-name'>{name}</div>
      <button>Challenge</button>
    </div>
  );
}
