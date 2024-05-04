 import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

function FooButton() {
  let num = 0;
  const btn = <button className='Button'>Натисків: {num}</button>;
  return btn;
}
//Компоненти можуть бути як класовими 

class Button extends Component {
  render () {
    let num = 0;
    const btn = <button className='Button'>Натисків: {num}</button>;
    return btn;
  }
}

export {App, Button};
