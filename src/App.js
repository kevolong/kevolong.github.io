import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
  faWindowClose,
  faCircle,
  faCode,
  faUser,
  faLaptop,
  faDesktop,
  faTabletAlt,
  faMobileAlt,
  faServer,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faEnvelope,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
  faWindowClose,
  faCircle,
  faCode,
  faUser,
  faLaptop,
  faDesktop,
  faTabletAlt,
  faMobileAlt,
  faServer,
  faDatabase
);

class App extends Component {
  render() {
    return (
      <div id="app-container">
        {this.props.location.pathname !== "/" && <Navbar />}
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
} // end of App component

export default withRouter(App);
