import React, { Component } from 'react'

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
          {this.state.on && (
              <div>
                <p>test</p>
                <h1>also test</h1>
              </div>
          )}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    )
  }
}
