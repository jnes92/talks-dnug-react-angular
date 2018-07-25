import React, {Component} from 'react';
import DisplayGreetingStateless from './DisplayGreeting';


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

export default SayHelloComponent;