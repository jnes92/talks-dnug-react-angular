import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  changeInputValue = (e) => {
    console.log(e.target.value);
  }

  handleButtonClick = () => {
    console.log("User clicked the button.");
  }

  render() {
    const message='Willkommen bei der .NET UG in Koblenz!';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{message}</h1>
        </header>
        <p className="App-intro">
          Bitte gib deinen Namen ein:
        </p>
        <input onChange={this.changeInputValue} type="text" />
        <button onClick={this.handleButtonClick}> Say Hello ! </button>
      </div>
    );
  }
}

export default App;
