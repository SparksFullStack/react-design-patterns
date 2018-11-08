import React, { Component } from 'react';
import './App.css';

import Toggle from './components/toggleRenderProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle render={({on, toggle}) => (
          <div>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show/Hide</button>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
