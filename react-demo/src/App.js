import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: '',
      showGreeting: false
    }
  }

  changeInputValue = (e) => {
    this.setState({input: e.target.value})
  }

  handleButtonClick = () => {
    this.setState({showGreeting: !this.state.showGreeting});
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
        <input 
          value={this.state.input}
          onChange={this.changeInputValue} type="text" 
        />
        <button onClick={this.handleButtonClick}> Say Hello ! </button>
        {this.state.showGreeting ? <p> Sei gegrüßt, {this.state.input} ! </p>: null}
        {this.state.showGreeting && <p> Sei gegrüßt, {this.state.input} ! </p>}
      </div>
    );
  }
}

export default App;
