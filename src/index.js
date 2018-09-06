import React, { Fragment } from "react";
import { render } from "react-dom";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1> This is the site header</h1>
        </header>
        <main>
          <p> Here components will mount !!!</p>
        </main>
        <footer>
          <span> This is the footer</span>
        </footer>
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
