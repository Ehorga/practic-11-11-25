import './App.css';

function Heading() {
  const sum = (n1, n2) => n1 + n2;
  return <h2>title qwerty {sum(2, 3)}</h2>;
}

//create paragraf

function App() {
  const name = 'Anna';
  const isAdult = true;
  return (
    <>
      <h1 className="heading">
        {isAdult ? 'Hello' : 'Hi'}, {name}!
      </h1>

      <Heading />
      {/* paragraf */}
    </>
  );
}

export default App;
