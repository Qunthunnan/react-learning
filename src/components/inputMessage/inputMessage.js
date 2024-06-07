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

