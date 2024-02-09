export default function Profile(props) {
  const { image, name, title } = props;

  return (
    <div className='profile'>
      <img className='photo' src={image} alt='avatar' />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
