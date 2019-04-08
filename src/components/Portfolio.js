import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { frontEndProjects, fullStackProjects, featuredProject } from "../data/project_data.js";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: "featured", // Current category showing on page
      modalShow: false, // Modal showing
      modalInfo: {
        // Project info for modal
        title: "",
        pic: "",
        desc: "",
        skills: [],
        url: "",
        code: ""
      },
      currentPic: 0, // Current pic showing
      numPics: featuredProject.pics.length // Number of pics for current project
    };
    this.switchCat = this.switchCat.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.picRight = this.picRight.bind(this);
    this.picLeft = this.picLeft.bind(this);
  } // end constructor

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    // Left Arrow (switch pic left if available)
    if (event.keyCode === 37 && this.state.currentPic > 0) {
      this.picLeft();
    }

    // Right Arrow (switch pic right if available)
    else if (event.keyCode === 39 && this.state.currentPic < this.state.numPics - 1) {
      this.picRight();
    }

    //Esc key (close modal if showing)
    else if (event.keyCode === 27 && this.state.modalShow) {
      this.closeModal();
    }
  }

  //Open Portfolio full card Modal
  openModal(event) {
    const projectName = event.currentTarget.id;
    const type = event.currentTarget.dataset.type;
    let project;
    let code = "";

    //Filter by type
    if (type === "front-end") {
      project = frontEndProjects.filter(project => project.title === projectName);
    } else if (type === "full-stack") {
      project = fullStackProjects.filter(project => project.title === projectName);
    }

    //If Source Code available
    if (project[0].hasOwnProperty("code")) {
      code = project[0].code;
    }

    this.setState({
      modalShow: true,
      modalInfo: {
        title: project[0].title,
        pics: project[0].pics,
        desc: project[0].desc,
        skills: project[0].skills,
        url: project[0].url,
        code: code
      },
      numPics: project[0].pics.length,
      currentPic: 0
    });
  }

  //Close Portfolio full card Modal
  closeModal() {
    this.setState({
      modalShow: false,
      modalInfo: {
        title: "",
        pic: "",
        desc: "",
        skills: [],
        url: "",
        code: ""
      },
      numPics: 0,
      currentPic: 0
    });
  }

  //Switch portfolio category
  switchCat(event) {
    this.setState({ currentCat: event.currentTarget.dataset.value, currentPic: 0 });

    //If featured, set num pics
    if (event.currentTarget.dataset.value === "featured") {
      this.setState({ numPics: featuredProject.pics.length });
    }
  }

  //Right Arrow Click - Switch pic
  picRight() {
    let newPic = this.state.currentPic + 1;
    this.setState({ currentPic: newPic });
  }

  //Right Arrow Click - Switch pic
  picLeft() {
    let newPic = this.state.currentPic - 1;
    this.setState({ currentPic: newPic });
  }

  render() {
    return (
      <div id="portfolio-page" className="app-page">
        <div className="page-header animated fadeIn">
          <h1>Primo Portfolio</h1>
        </div>
        <div className="page-content" id="portfolio-content">
          <PortfolioMenu currentCat={this.state.currentCat} switchCat={this.switchCat} />
          {this.state.currentCat === "featured" && (
            <Featured
              picRight={this.picRight}
              picLeft={this.picLeft}
              currentPic={this.state.currentPic}
              numPics={this.state.numPics}
            />
          )}
          {this.state.currentCat === "front-end" && <FrontEnd openModal={this.openModal} />}
          {this.state.currentCat === "full-stack" && <FullStack openModal={this.openModal} />}
          {this.state.modalShow && (
            <Modal
              modalInfo={this.state.modalInfo}
              closeModal={this.closeModal}
              picRight={this.picRight}
              picLeft={this.picLeft}
              currentPic={this.state.currentPic}
              numPics={this.state.numPics}
            />
          )}
        </div>{" "}
        {/* End page-content*/}
      </div>
    );
  }
} // end of Portfolio Component

//Category buttons
function PortfolioMenu(props) {
  return (
    <div id="portfolio-menu" className="animated fadeInRight faster">
      <button
        className={props.currentCat === "featured" ? "selected" : "unselected"}
        onClick={props.switchCat}
        data-value="featured">
        Featured
      </button>
      <button
        className={props.currentCat === "front-end" ? "selected" : "unselected"}
        onClick={props.switchCat}
        data-value="front-end">
        Front End
      </button>
      <button
        className={props.currentCat === "full-stack" ? "selected" : "unselected"}
        onClick={props.switchCat}
        data-value="full-stack">
        Full Stack
      </button>
    </div>
  );
}

//Featured Full Card
function Featured(props) {
  const project = featuredProject;
  const skills = project.skills.map(skill => (
    <h5 className="skill" key={skill}>
      {skill}
    </h5>
  ));

  return (
    <div className="featured-card animated fadeInLeft faster">
      <div className="card-pics">
        {" "}
        <img src={project.pics[props.currentPic]} alt="" />
        {props.currentPic > 0 && (
          <FontAwesomeIcon
            className="pic-left"
            icon={["fas", "arrow-left"]}
            size="3x"
            transform="shrink-5"
            onClick={props.picLeft}
          />
        )}
        {props.currentPic < props.numPics - 1 && (
          <FontAwesomeIcon
            className="pic-right"
            icon={["fas", "arrow-right"]}
            size="3x"
            transform="shrink-5"
            onClick={props.picRight}
          />
        )}
      </div>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-description">{project.desc}</p>
        <div className="card-skills">{skills}</div> {/* end card-skills*/}
        <div className="card-footer">
          <a href={project.code} className="code-link" target="_blank" rel="noreferrer noopener">
            {" "}
            <div className="visit">
              <FontAwesomeIcon
                className="visit-icon"
                icon={["fas", "code"]}
                size="lg"
                transform="shrink-2"
                fixedWidth
              />
              <h4 className="visit-text">Code</h4>
            </div>
          </a>
          <a href={project.url} target="_blank" rel="noreferrer noopener">
            {" "}
            <div className="visit">
              <FontAwesomeIcon
                className="visit-icon"
                icon={["fas", "desktop"]}
                size="lg"
                transform="shrink-2"
                fixedWidth
              />
              <h4 className="visit-text">Site</h4>
            </div>
          </a>
        </div>{" "}
        {/* end card-footer */}
      </div>{" "}
      {/* end card-body */}
    </div>
  );
}

//FrontEnd project preview cards
function FrontEnd(props) {
  const cards = frontEndProjects.map(project => (
    <div
      className="small-card"
      id={project.title}
      key={project.title}
      data-type="front-end"
      onClick={props.openModal}>
      <img src={project.pics[0]} alt="" />
      <h3 className="card-title">{project.title}</h3>
    </div>
  ));

  return (
    <div id="frontend-preview" className="preview-cards animated fadeInLeft faster">
      {cards}
    </div>
  );
}

//FullStack project preview cards
function FullStack(props) {
  const cards = fullStackProjects.map(project => (
    <div
      className="small-card"
      id={project.title}
      key={project.title}
      data-type="full-stack"
      onClick={props.openModal}>
      <img src={project.pics[0]} alt="" />
      <h3 className="card-title">{project.title}</h3>
    </div>
  ));

  return (
    <div id="fullstack-preview" className="preview-cards animated fadeInLeft faster">
      {cards}
    </div>
  );
}

//Full card modal pop-up
function Modal(props) {
  const skills = props.modalInfo.skills.map(skill => (
    <h5 className="skill" key={skill}>
      {skill}
    </h5>
  ));

  console.log(props.modalInfo.code);

  return (
    <div id="project-modal">
      <div className="full-card animated zoomIn faster">
        <div className="card-pics">
          {" "}
          <img src={props.modalInfo.pics[props.currentPic]} alt="" />
          {props.currentPic > 0 && (
            <FontAwesomeIcon
              className="pic-left"
              icon={["fas", "arrow-left"]}
              size="3x"
              transform="shrink-5"
              onClick={props.picLeft}
            />
          )}
          {props.currentPic < props.numPics - 1 && (
            <FontAwesomeIcon
              className="pic-right"
              icon={["fas", "arrow-right"]}
              size="3x"
              transform="shrink-5"
              onClick={props.picRight}
            />
          )}
        </div>
        <div className="card-body">
          <h2 className="card-title">{props.modalInfo.title}</h2>
          <p className="card-description">{props.modalInfo.desc}</p>
          <div className="card-skills">{skills}</div> {/* end card-skills*/}
          <div className="card-footer">
            <div className="visit-links">
              {props.modalInfo.code !== "" && (
                <a
                  href={props.modalInfo.code}
                  className="code-link"
                  target="_blank"
                  rel="noreferrer noopener">
                  {" "}
                  <div className="visit">
                    <FontAwesomeIcon
                      className="visit-icon"
                      icon={["fas", "code"]}
                      size="lg"
                      transform="shrink-2"
                      fixedWidth
                    />
                    <h4 className="visit-text">Code</h4>
                  </div>
                </a>
              )}
              <a href={props.modalInfo.url} target="_blank" rel="noreferrer noopener">
                <div className="visit">
                  <FontAwesomeIcon
                    className="visit-icon"
                    icon={["fas", "desktop"]}
                    size="lg"
                    transform="shrink-2"
                    fixedWidth
                  />
                  <h4 className="visit-text">Site</h4>
                </div>
              </a>
            </div>

            <div className="close">
              <button id="close-modal-button" onClick={props.closeModal}>
                <FontAwesomeIcon
                  className="close-icon"
                  icon={["fas", "times"]}
                  size="3x"
                  transform="shrink-2 down-0.5"
                />
              </button>
            </div>
          </div>{" "}
          {/* end card-footer */}
        </div>{" "}
        {/* end card-body */}
      </div>
    </div>
  );
}

export default Portfolio;
