import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kevinPic from "../assets/images/kevin-colorado-wedding.jpg";

class About extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const shrink = "shrink-2";
    return (
      <div id="about-page" className="app-page">
        <div className="page-header animated fadeIn">
          <h1>All About Kevin</h1>
          <h5>(well...only some)</h5>
        </div>
        <div id="about-content" className="page-content">
          <div id="about-sidebar" className="animated fadeInRight faster">
            <img src={kevinPic} alt="" />
            <div id="about-facts">
              <div className="fact-set">
                <FontAwesomeIcon
                  className="fact-icon"
                  icon={["fas", "code"]}
                  size="2x"
                  transform={shrink}
                />
                {/* <h4>Efficient</h4> */}
                <h4>Efficient, modular, maintainable code.</h4>
              </div>
              <div className="fact-set">
                <FontAwesomeIcon
                  className="fact-icon"
                  icon={["fas", "user"]}
                  size="2x"
                  transform={shrink}
                />
                {/* <h4>Intuitive</h4> */}
                <h4>Intuitive, easy-to-use UI/UX.</h4>
              </div>
              <div className="fact-set">
                <div className="icon-set">
                  <FontAwesomeIcon
                    className="fact-icon"
                    icon={["fas", "tablet-alt"]}
                    size="2x"
                    transform={shrink}
                  />
                  <FontAwesomeIcon
                    className="fact-icon"
                    icon={["fas", "laptop"]}
                    size="2x"
                    transform={shrink}
                  />

                  <FontAwesomeIcon
                    className="fact-icon"
                    icon={["fas", "mobile-alt"]}
                    size="2x"
                    transform={shrink}
                  />
                </div>

                {/* <h4>Responsive</h4> */}
                <h4>Beautiful design for every device.</h4>
              </div>
              <div className="fact-set">
                <div className="icon-set">
                  <FontAwesomeIcon
                    className="fact-icon"
                    icon={["fas", "desktop"]}
                    size="2x"
                    transform={shrink}
                  />
                  <FontAwesomeIcon
                    className="fact-icon"
                    icon={["fas", "server"]}
                    size="2x"
                    transform={shrink}
                  />
                  <FontAwesomeIcon
                    className="fact-icon"
                    icon={["fas", "database"]}
                    size="2x"
                    transform={shrink}
                  />
                  {/* <h4>Comprehensive</h4> */}
                  <h4>Comprehensive wizard of both ends.</h4>
                </div>
              </div>
            </div>
          </div>

          <div id="about-info" className="animated fadeInLeft faster">
            <p>
              I've been flirting with coding since high school, and finally decided to get serious
              after a long career as a film and television editor. I love to solve puzzles, build
              projects, figure out how things work, perfect the small details in service of the big
              picture, and be creative. My brain is half logical analyst, half artist, and it never
              stops running. Development is where I've found the perfect balance.
            </p>
            <p>
              My career in Hollywood gave me the skills and experience invaluable to development:
              collaborating with teams, constantly learning new technology, continuously growing my
              skill set, organizing and managing projects so anyone can effortlessly step in,
              working with clients and figuring out what they really want.
            </p>
            <p>
              I approach every project with fresh eyes while keeping in mind the valuable experience
              and ideas from prior ones. I strive ceaselessly to make the user experience as
              intuitive and smooth as possible, and my code to be efficient, readable, and
              maintainable. I don't rest until every element, function, and route has been tested
              and passed with flying, driving, and sailing colors. And don't worry, I comment my
              code.
            </p>
          </div>
        </div>
      </div>
    );
  }
} // end of About Component

export default About;
