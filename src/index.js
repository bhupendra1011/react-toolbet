import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import NavBar from "./components/NavBar";

import LandingPage from "./containers/LandingPage";
import Lodable from "react-loadable";
import Footer from "./components/Footer";

import { Provider } from "react-redux";
import store from "./store";

import "./styles.css";

const loading = () => <h1> Loading split code ...</h1>;
// Lodable HOC resolves to promise which returns the lazy loaded component
const LodableDetails = Lodable({
  loader: () => import("./components/DetailsPage"),
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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
