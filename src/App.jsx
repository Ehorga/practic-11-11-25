import './App.css';

function Heading() {
  const sum = (n1, n2) => n1 + n2;
  return <h2>title qwerty {sum(2, 3)}</h2>;
}

function Paragraf(){
  return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, cum necessitatibus harum dignissimos iste repudiandae, ex itaque iusto, velit odio molestias a fugiat numquam quibusdam nihil laboriosam aperiam perspiciatis temporibus.</p>
}

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
      <Paragraf/>
    </>
  );
}

export default App;
