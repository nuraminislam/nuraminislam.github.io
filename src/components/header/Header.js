import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;

  return (
    <Headroom className={isDark ? "dark-menu" : ""}>
      <div className="main-container">
        <header className={isDark ? "dark-menu header" : "header"}>
          <a href="/" className="logo">
            <img src={require("../../assets/images/my_photo.jpg")} alt="logo" className="logo-image" />
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{color: "white"}}
          >
            <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
          </label>
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            <li>
              <a href="/">Home</a>
            </li>
            {viewSkills && (
              <li>
                <a href="#skills">About</a>
              </li>
            )}
            {viewOpenSource && (
              <li>
                <a href="#opensource">Projects</a>
              </li>
            )}
            {viewExperience && (
              <li>
                <a href="#experience">Experience</a>
              </li>
            )}
            <li>
              <a href="#education">Education</a>
            </li>
          </ul>
          <div className="header-right">
            <ToggleSwitch />
            <a href="https://calendly.com/nuraminislam/30min" target="_blank" rel="noopener noreferrer" className="header-btn">Contact</a>
          </div>
        </header>
      </div>
    </Headroom>
  );
}
export default Header;
