// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Code,
CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">

          <Heading margin="10px 0 0" textColor="tertiary" size={1} fit caps >
            Frameworkbattle: React vs Angular
          </Heading>
          <Text size={1} fit lineHeight={1} textColor="secondary" bold>
            .NET User Group: Koblenz
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading margin="80px" size={2} textColor="primary">Über uns</Heading>
          <Heading size={5} textColor="secondary">Daniel Varela</Heading>
          <Heading size={5} textColor="secondary">Jonas Österle</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Das heutige Menü:</Heading>
          <List>
            <ListItem>Kleine Vorspeise </ListItem>
            <ListItem>Hauptgericht: Demo </ListItem>
            <ListItem>Dessert: Diskussion </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>React</Quote>
            <Cite>by Facebook</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <BlockQuote>
            <Quote textColor="tertiary">Angular</Quote>
            <Cite textColor="primary">by Google</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
        <Heading size={5} textColor="primary">GOTO: Code</Heading>

          <CodePane lang='javascript' source={`          
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();`}>
          </CodePane>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
        <Heading size={5} textColor="primary">return React.Profis; </Heading>
        <Heading size={5} textColor="primary">return Angular.Profis; </Heading>
        </Slide>
      </Deck>
    );
  }
}
