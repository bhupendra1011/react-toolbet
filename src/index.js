import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import NavBar from "./NavBar";
import "./styles.css";
import LandingPage from "./LandingPage";
import DetailsPage from "./DetailsPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* Routing Logic will change the different components here */}
        <Router>
          <LandingPage path="/" />
          <DetailsPage path="/details" />
        </Router>
        <footer>
          <span> This is the footer</span>
        </footer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
