 import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { ContentWrapper } from './components/contentWrapper/ContentWrapper';
import { Input, Message, renderMessage } from './components/inputMessage/inputMessage';
import { Slider } from './components/slider/Slider';


function App() {
  return (
    <div className="App">

        <ContentWrapper style={{ border: '1px solid black' }}>
          <h2>sfsfihwiwhf</h2>
          <p>FLSJSFLSJF</p>
          <p>FLSJSFLSJF</p>
          <p>FLSJSFLSJF</p>
          <p>FLSJSFLSJF</p>
        </ContentWrapper>
        <Input render={renderMessage}></Input>
        <Slider></Slider>
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
