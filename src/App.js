import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <LightCounter />
      </div>
    );
  }
}

export default App;

class LightCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0
    };
  }

  render(){
    return (
      <div>
        <h1>Hello!</h1>
        <h1>{this.state.strikes}</h1>
      </div>
    );
  }
}


