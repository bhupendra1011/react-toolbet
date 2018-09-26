import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import NavBar from "./NavBar";
import "./styles.css";
import LandingPage from "./LandingPage";
import Lodable from "react-loadable";
import Footer from "./Footer";

const loading = () => <h1> Loading solit code ...</h1>;
// Lodable HOC resolves to promise which returns the lazy loaded component
const LodableDetails = Lodable({
  loader: () => import("./DetailsPage"),
  loading: loading
});

// code splitting at the route level
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* Routing Logic will change the different components here */}
        <Router>
          <LandingPage path="/" />
          <LodableDetails path="/details" />
        </Router>
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
