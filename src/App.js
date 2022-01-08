import logo from './logo.svg';
import './App.css';

const App = () => {
  const onDragStart = (event, id) => {
    console.log('onDragStart:', id);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    console.log('dropped');
  };

  const colors = ['green', 'blue'];
  const blocks = colors.map((color) => (
    <div
      key={color}
      className='block'
      draggable
      onDragStart={(event) => onDragStart(event, color)}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{backgroundColor: color, width: '20em'}}
    >
      {color}
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header" onDragOver={onDragOver}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {blocks}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
