import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import SayHelloComponent from "./components/SayHello";

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
