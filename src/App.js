import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam voluptas beatae consequatur ipsa. Placeat praesentium, perspiciatis nemo atque illum quae, tempora sapiente molestias deserunt necessitatibus mollitia aliquid reprehenderit provident.</p>
      </div>
    );
  }
}

export default App;
