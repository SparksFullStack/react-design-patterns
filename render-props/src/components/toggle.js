import React, { Component } from 'react'
//  * this file demonstrates a basic toggle that renders props.children

export default class toggle extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({ on: !this.state.on });
    }

  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    )
  }
}
