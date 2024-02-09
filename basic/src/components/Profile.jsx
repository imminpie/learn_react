export default function Profile(props) {
  const { image, name, title, isNew } = props;

  return (
    <div className='profile'>
      <img className='photo' src={image} alt='avatar' />
      {isNew && <span className='new'>New</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
