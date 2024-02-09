import './App.css';

function App() {
  const list = ['우유', '딸기', '바나나'];

  return (
    <>
      <h1 style={{ color: 'orange' }}>Hello!</h1>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
}

export default App;
