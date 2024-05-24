import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
// import reportWebVitals from './reportWebVitals'; 

// const descr = 'list descr';

// const testElement = (<div className='testBlock'>
//   <div className='testList'></div>
//   <ul>
//     <li>{descr}</li>
//     <li>list item1</li>
//     <li>list item2</li>
//     <li>list item3</li>
//   </ul>
// </div>);
//Створення елементу з JSX синтаксисом

// const testElement2 = React.createElement('div', {className: 'classnameofdiv'}, 'testetestst');
//Створення елементу з JS синтаксисом


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

//Елементи передбачені для разового використання у додатку, не можуть бути змінені, а тільки на ново перестворені на сторінці.
//Компоненти передбачені для багато разового використання та можуть вмістити у собі певну логіку. Самі по собі компоненти оголошуються з великої літери та по факту являють собою функцією, яка повертає JSX компонент

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
