import React, { Component } from "react";
import ReactDOM from 'react-dom';

export class Example extends Component {
    constructor(props) {
        super(props);
        this.buttonReff = React.createRef();
    }
    render () {
        return (
        <>
            <h1 onClick={()=>{ this.buttonReff.current.focus(); console.log(this.buttonReff.current) }}>Hello, this is example of reffs</h1>
            <button ref={this.buttonReff}>sfsfsf</button>
            <Portal>
                <div style={{ position: 'absolute'}} className="div">
                    <p>Оголошення</p>
                </div>
            </Portal>
        </>
        )
    }
}

//Рефи надають можливість отримати посилання на домелемент, якщо посилання призначене на елементі. Якщо посилання призначене на компоненті, то у посилання запишеться екземляр классу компонента. Отримати дом елемент може знадобитись у випадку коли треба скористатись властивостями, які є тільки у Dom api, такі як focus
//Портали надають можливість у випадках, коли треба зберегти реакт структуру, але якійсь елемент відрендерити за межами компоненту, десь у DOM дереві. Можна у такому випадку створити портал, та вказати, де саме повинен з'явитись елемент у DOM, але при цьому з точки зору реакта, цей елемент буде все ще всередині компонента, де цей елемент був викликаний

const Portal = (props) => {
    const node = document.createElement('div');
    document.body.append(node);

    return ReactDOM.createPortal(props.children, node);
}