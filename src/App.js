 import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import styled from 'styled-components';

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
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }
  render () {
    const {num} = this.state;
    const Btn = styled.button`
      padding: 100px;
      font-size: 30px;
      font-weight: 700;
      background-color: burlywood;
      border: 2px darkcyan dashed;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `;
    const btn = <Btn onClick={()=>{this.setState(({num}) => { return {num: num + 1} })}} className='Button'>Натисків: {num}</Btn>;
    return btn;
  }
}

export {App, Button};
