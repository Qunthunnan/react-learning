 import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import { Hello, withLog } from './components/hoc/hoc';
import { TransitionPage } from './components/transition/TransitionPage';
import { DonationForm } from './components/form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <DonationForm/>
    </div>
  );
}

function FooButton() {
  let num = 0;
  const btn = <button className='Button'>Натисків: {num}</button>;
  return btn;
}
//Компоненти можуть бути як класовими, так і функціональними. Якщо це класові - вони наслідуються від React.Component та повинні мати в собі обов'язковий метод render () - який повертатиме jsx елемент.

class Button extends Component {
  render () {
    let num = 0;
    const btn = <button className='Button'>Натисків: {num}</button>;
    return btn;
  }
}

export {App, Button};
