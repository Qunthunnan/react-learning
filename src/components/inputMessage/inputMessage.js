import { Component } from "react";

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render () {
        return (
            <>
                <input onInput={(e)=> {this.onInput(e.target.value)}} style={{
                    padding: '0px 15px',
                    height: '30px',
                    width: '300px',
                    borderRadius: '25px'
                }} type="text" />
                {this.props.render(this.state.value, 'aqua')}
            </>
        )
    } 

    onInput = (value) => {
        this.setState({
            value: value
        })
    }
}

export const Message = (props) => {
    return (
        <p style={props.style}>{props.children}</p>
    )
}

export function renderMessage(value, color) {
    return(
        <Message style={{color: color}}>{value}</Message>
    )
}

//У випадку, коли в нас стоїть задача зв'язати два незалежних друг від друга компоненти, не прив'язуючи їх друг до друга, то може допомогти такий патерн, як render props. Це коли ми передаємо у пропс фунцію яка буде визначати, як і що треба рендерити, а в самому компоненті просто викликати цю функцію, передаючи в неї потрібні аргументи. Компонент по факту не прив'язується до іншого компоненту, він просто викликає певну функцію, яку передають в нього, яка вже рендерить інший компонент

