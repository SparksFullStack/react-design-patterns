import React, { Component } from 'react'
//  * this file demonstrates a reusable render props based toggle

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
        {this.props.children({ on: this.state.on, toggle: this.toggle })}
      </div>
    )
  }
}
