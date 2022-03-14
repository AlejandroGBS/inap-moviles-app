import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          edita esto a ver que pasa <code>src/App.js</code> and save to reload.
        </p>
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

/* export default App; */
export default BoardApp;

function BoardApp() {
  return (
    <div className='board-game'>
      <Board />
    </div>
  );
}
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare('1')}
          {this.renderSquare('1')}
          {this.renderSquare('1')}
        </div>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className='square'>
        {this.props.value}
      </button>
    );
  }
}

