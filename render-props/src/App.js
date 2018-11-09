import React, { Component } from 'react';
import './App.css';

import Toggle from './components/ToggleRPC';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Toggle render={({on, toggle}) => (
          <div>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show/Hide</button>
          </div>
        )}/> */}
        <Toggle>
          {({on, toggle}) => (
            <div>
              {on && <h1>Show Me!</h1>}
              <button onClick={toggle}>Toggle</button>
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
