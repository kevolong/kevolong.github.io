import React, { Component } from "react";
import kevinPoster from "../assets/images/kevin-poster.png";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div id="nav-div">
        <nav id="navbar" className="animated slideInDown">
          <div id="nav-home-div">
            <NavLink to="/">
              <img src={kevinPoster} alt="" />
            </NavLink>
          </div>
          <div id="nav-links-div">
            <ul id="nav-links">
              <li id="about-nav-link" className="nav-link margin-both">
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li id="portfolio-nav-link" className="nav-link margin-both">
                <NavLink to="/portfolio" activeClassName="active">
                  Portfolio
                </NavLink>
              </li>
              <li id="skills-nav-link" className="nav-link margin-both">
                <NavLink to="/skills" activeClassName="active">
                  Skills
                </NavLink>
              </li>
              <li id="contact-nav-link" className="nav-link margin-left">
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
} // end of About Component

export default Navbar;
