import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

const DisplayGreetingStateless = () => {
  return <p> Sei gegrüßt, this.state.input ! </p>;
}

class SayHelloComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      showGreeting: false
    };
  }

  changeInputValue = e => {
    this.setState({ input: e.target.value });
  };

  handleButtonClick = () => {
    this.setState({ showGreeting: !this.state.showGreeting });
  };


  render() {
    return (
      <div>
        <p className="App-intro">Bitte gib deinen Namen ein:</p>
        <input
          value={this.state.input}
          onChange={this.changeInputValue}
          type="text"
        />
        <button onClick={this.handleButtonClick}> Say Hello ! </button>
        {this.state.showGreeting && <DisplayGreetingStateless /> }
      </div>
    );
  }
}

class App extends Component {
  render() {
    const message = "Willkommen bei der .NET UG in Koblenz!";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{message}</h1>
        </header>
        <SayHelloComponent />
      </div>
    );
  }
}

export default App;
