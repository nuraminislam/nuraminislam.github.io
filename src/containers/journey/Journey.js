import React, {useContext} from "react";
import "./Journey.css";
import {journeyInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Journey() {
  const {isDark} = useContext(StyleContext);

  if (!journeyInfo.display) {
    return null;
  }

  return (
    <div className="main" id="journey">
      <Fade bottom duration={1000} distance="20px">
        <div className="journey-header-div">
          <h1 className="heading journey-title">
            {journeyInfo.title}
          </h1>
          <p className="subTitle journey-subtitle">
            {journeyInfo.subtitle}
          </p>
        </div>
        <div className="journey-container">
          <div className="timeline">
            {journeyInfo.milestones.map((milestone, index) => {
              return (
                <div className="timeline-item" key={index}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h2 className="timeline-title">
                        {milestone.title}
                      </h2>
                      <span className="timeline-year">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="timeline-desc">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}
