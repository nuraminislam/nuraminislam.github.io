import React, {useContext} from "react";
import "./Process.css";
import {processInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Process() {
  const {isDark} = useContext(StyleContext);

  if (!processInfo.display) {
    return null;
  }

  return (
    <div className="main" id="process">
      <Fade bottom duration={1000} distance="20px">
        <h1 className={isDark ? "dark-mode process-main-title" : "process-main-title"}>
          {processInfo.title}
        </h1>
        
        <div className="process-layout-container">
          {/* Background Crosshair Lines */}
          <div className={isDark ? "dark-mode crosshair-vertical" : "crosshair-vertical"}></div>
          <div className={isDark ? "dark-mode crosshair-horizontal" : "crosshair-horizontal"}></div>

          {/* Central Image Overlap */}
          <div className={isDark ? "dark-mode process-center-image-wrapper" : "process-center-image-wrapper"}>
            <img 
              src={processInfo.image} 
              alt="Process abstract" 
              className="process-center-img" 
            />
          </div>

          {/* 2x2 Grid for the steps */}
          <div className="process-grid">
            {processInfo.steps.map((step, index) => {
              return (
                <div className={`process-quadrant quadrant-${index + 1}`} key={index}>
                  <div className="process-content-box">
                    <h2 className={isDark ? "dark-mode process-step-title" : "process-step-title"}>
                      <span className="process-step-id">{step.id}.</span> {step.title}
                    </h2>
                    <p className={isDark ? "dark-mode process-step-desc" : "process-step-desc"}>
                      {step.desc}
                    </p>
                    <a href="https://calendly.com/nuraminislam/30min" target="_blank" rel="noopener noreferrer" className={isDark ? "dark-mode process-button" : "process-button"}>
                      <div className="process-button-icon">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                      <span>LETS TALK</span>
                    </a>
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
