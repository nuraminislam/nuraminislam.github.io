import React, {useContext} from "react";
import "./Skills.css";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode expertise-section" : "expertise-section"} id="skills">
      <div className="expertise-main-div">
        <Fade bottom duration={1000} distance="20px">
          <div className="expertise-header">
            <h1 className={isDark ? "dark-mode expertise-title" : "expertise-title"}>
              {skillsSection.title}
            </h1>
            <p className={isDark ? "dark-mode expertise-subtitle" : "expertise-subtitle"}>
              {skillsSection.subTitle}
            </p>
          </div>
        </Fade>

        <div className="expertise-grid">
          {skillsSection.features.map((feature, i) => (
            <Fade bottom duration={1000} delay={i * 100} key={i}>
              <div className="expertise-card">
                <div className="expertise-icon-box" style={{backgroundColor: feature.color}}>
                  <i className={feature.icon}></i>
                </div>
                <h3 className={isDark ? "dark-mode expertise-card-title" : "expertise-card-title"}>
                  {feature.title}
                </h3>
                <p className={isDark ? "dark-mode expertise-card-desc" : "expertise-card-desc"}>
                  {feature.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
