import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  render() {
    return (
      <div id="contact-page" className="app-page">
        <div className="page-header animated fadeIn">
          <h1>Contact Kevin</h1>
        </div>
        <div className="page-content">
          <div id="contact-grid">
            <div id="text-row" className="animated fadeInRight faster">
              <h3>Wanna work together?</h3>
              <h3>Or just talk soccer, videogames, hiking, or awesome art?</h3>
            </div>
            <div id="mail-row" className="animated fadeInLeft faster">
              <a href="mailto:kevin@kevinandrewlong.com">
                <FontAwesomeIcon className="icon" icon={["fas", "envelope"]} size="4x" />
              </a>
            </div>
            <div id="social-row" className="animated fadeInLeft faster">
              <a href="https://github.com/kevolong" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fab", "github"]}
                  size="4x"
                  transform="shrink-3"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kevinandrewlong/"
                target="_blank"
                rel="noreferrer noopener">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fab", "linkedin-in"]}
                  size="4x"
                  transform="shrink-3"
                />
              </a>
              <a href="https://twitter.com/DevKev11" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fab", "twitter"]}
                  size="4x"
                  transform="shrink-3"
                />
              </a>
            </div>{" "}
            {/* end social-row */}
          </div>{" "}
          {/* end contact-grid */}
        </div>{" "}
        {/* end page-content*/}
      </div>
    );
  }
} // end of Contact Component

export default Contact;
