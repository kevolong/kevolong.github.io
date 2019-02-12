import React, { Component } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  htmlLogo,
  cssLogo,
  sassLogo,
  bootstrapLogo,
  materializeLogo,
  psLogo,
  jsLogo,
  reactLogo,
  jqueryLogo,
  d3Logo,
  nodeLogo,
  expressLogo,
  mongoLogo,
  mochaLogo,
  chaiLogo,
  socketLogo,
  passportLogo,
  helmetLogo,
  pugLogo,
  typescriptLogo,
  angularLogo
} from "../data/svgLogos.js";

class Skills extends Component {
  render() {
    return (
      <div id="skills-page" className="app-page">
        <div className="page-header animated fadeIn">
          <h1>Mad Skills</h1>
        </div>
        <div className="page-content" id="skills-content">
          <div className="skill-grid">
            {/* Front End */}
            <div id="front-end-section" className="skill-section animated fadeInLeft faster">
              <h2>Front End</h2>
              {/* HTML CSS Design icon-row*/}
              <div className="icon-row">
                {/* HTML CSS Sass icon-col */}
                <div className="icon-col">
                  <div className="icon-set">
                    <img className="icon" src={htmlLogo} alt="" />
                    <h4>HTML5</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={cssLogo} alt="" />
                    <h4>CSS3</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={sassLogo} alt="" />
                    <h4>Sass</h4>
                  </div>
                </div>
                {/* Bootsrap Materialize Photoshop icon-col */}
                <div className="icon-col">
                  <div className="icon-set">
                    <img className="icon" src={bootstrapLogo} alt="" />
                    <h4>Bootstrap</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={materializeLogo} alt="" />
                    <h4>Materialize</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={psLogo} alt="" />
                    <h4>Photoshop</h4>
                  </div>
                </div>
              </div>
              {/* end icon-row */}
              {/* Javascript icon-row*/}
              <div className="icon-row">
                {/* Javascript Typescript Angular React icon-col */}
                <div className="icon-col">
                  <div className="icon-set">
                    <img className="icon" src={jsLogo} alt="" />
                    <h4>Javascript</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={typescriptLogo} alt="" />
                    <h4>Typescript</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={angularLogo} alt="" />
                    <h4>Angular</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={reactLogo} alt="" />
                    <h4>React</h4>
                  </div>
                </div>
                {/* jQuery D3 icon-col */}
                <div className="icon-col">
                  <div className="icon-set">
                    <img className="icon" src={jqueryLogo} alt="" />
                    <h4>jQuery</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={d3Logo} alt="" />
                    <h4>D3</h4>
                  </div>
                </div>
              </div>{" "}
              {/* end icon-row */}
            </div>{" "}
            {/* end Front End section */}
            {/* Back End */}
            <div id="back-end-section" className="skill-section animated fadeInRight faster">
              <h2>Back End</h2>
              {/* Node Mongo QA icon-row */}
              <div className="icon-row">
                {/* Node Express Mongo icon-col */}
                <div className="icon-col">
                  <div className="icon-set">
                    <img className="icon" src={nodeLogo} alt="" />
                    <h4>Node.js</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={expressLogo} alt="" />
                    <h4>Express</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={mongoLogo} alt="" />
                    <h4>MongoDB</h4>
                  </div>
                </div>
                {/* QA icon-col */}
                <div className="icon-col">
                  <div className="icon-set">
                    <img className="icon" src={mochaLogo} alt="" />
                    <h4>Mocha</h4>
                  </div>
                  <div className="icon-set">
                    <img className="icon" src={chaiLogo} alt="" />
                    <h4>Chai</h4>
                  </div>
                </div>
              </div>{" "}
              {/* end icon-row */}
              {/* Info Security icon-row */}
              <div className="icon-row">
                <div className="icon-set">
                  <img className="icon" src={socketLogo} alt="" />
                  <h4>Socket-IO</h4>
                </div>
                <div className="icon-set">
                  <img className="icon" src={passportLogo} alt="" />
                  <h4>Passport</h4>
                </div>
                <div className="icon-set">
                  <img className="icon" src={helmetLogo} alt="" />
                  <h4>Helmet</h4>
                </div>
                <div className="icon-set">
                  <img className="icon" src={pugLogo} alt="" />
                  <h4>Pug</h4>
                </div>
              </div>{" "}
              {/* end icon-row */}
            </div>{" "}
            {/* end Back End section */}
          </div>
        </div>{" "}
        {/* end page content */}
      </div>
    );
  }
} // end of Skills Component

export default Skills;
