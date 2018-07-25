import React, {Component} from 'react';
import DisplayGreetingStateless from './DisplayGreeting';


class SayHelloComponent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        input: props.defaultValue,
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
        <div style={{border: '1px solid black'}}>
            <p> Dein Property: {this.props.defaultValue} </p>
          <p className="App-intro">Bitte gib deinen Namen ein:</p>
          <input
            value={this.state.input}
            onChange={this.changeInputValue}
            type="text"
          />
          <button onClick={this.handleButtonClick}> Say Hello ! </button>
          <DisplayGreetingStateless value={this.state.input} show={this.state.showGreeting} />
        </div>
      );
    }
  }

export default SayHelloComponent;