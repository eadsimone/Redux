import React, { Component } from 'react'

export class Counter extends Component {
    // state = {
    //     contador: 0
    // }
    //
    // handleDecrement = () => {
    //     this.setState({ contador: this.state.contador - 1 })
    // }
    //
    // handleIncrement = () => {
    //     this.setState({ contador: this.state.contador + 1 })
    // }

    render() {
        return (
            <div>
                <div>
                    Contador: <span>{this.props.counter}</span>
                </div>

                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}
