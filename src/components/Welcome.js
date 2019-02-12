import React, { Component } from "react";
import { Link } from "react-router-dom";
import kevinPoster from "../assets/images/kevin-poster.png";

class Welcome extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.body.classList.add("welcome-body");
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
    document.body.classList.remove("welcome-body");
  }

  handleKeyDown(event) {
    //Enter or spacebar
    if (event.keyCode === 13 || event.keyCode === 32) {
      document.getElementById("check-me-out-button").click();
    }
  }

  render() {
    return (
      <div id="welcome-page">
        <div className="welcome-content">
          <div id="badge" className="animated fadeInLeft fast">
            <img src={kevinPoster} alt="kevin-pic" />
            <h1>Kevin Long</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div id="pitch" className="animated fadeInRight fast">
            <div id="pitch-intro">
              <h4>
                Hello there! <br />
                I'm Kevin. <br />I build web apps.
              </h4>
            </div>
            <div id="pitch-main">
              <h4>
                They run <em>smoothly</em>. <br />
                They look <em>cool</em>. <br />
                They <em>don't</em> suck.
              </h4>
            </div>
          </div>

          <div id="check-me-out" className="animated fadeInUp">
            <Link to="/about">
              <button id="check-me-out-button">Check Me Out</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
} // end of Welcome component

export default Welcome;
