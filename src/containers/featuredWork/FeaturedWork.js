import React, { useContext } from "react";
import "./FeaturedWork.css";
import { featuredWork } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function FeaturedWork() {
  const { isDark } = useContext(StyleContext);

  if (!featuredWork.display) {
    return null;
  }

  return (
    <div className={isDark ? "featured-section dark-mode" : "featured-section"} id="featuredWork">
      <div className="featured-container">
        <Fade bottom duration={1000} distance="20px">
          <div className="featured-header">
            <div className="featured-pill">
              {featuredWork.title}
            </div>
            <h2 className={isDark ? "dark-mode-title featured-title" : "featured-title"}>
              {featuredWork.subtitle} <span className="featured-highlight">{featuredWork.highlight}</span>
            </h2>
            <p className={isDark ? "dark-mode-text featured-desc" : "featured-desc"}>
              {featuredWork.description}
            </p>
          </div>
        </Fade>

        <div className="featured-grid">
          {featuredWork.projects.map((project, i) => {
            return (
              <Fade bottom duration={1000} distance="20px" delay={i * 100} key={i}>
                <div className={isDark ? "dark-mode-device featured-device" : "featured-device"}>
                  <div className="device-notch"></div>
                  <div className={isDark ? "dark-mode-card featured-card" : "featured-card"}>
                    <p className="featured-category">{project.category}</p>
                    <h3 className={isDark ? "dark-mode-title featured-card-title" : "featured-card-title"}>
                      {project.title}
                    </h3>
                    <p className={isDark ? "dark-mode-text featured-card-desc" : "featured-card-desc"}>
                      {project.desc}
                    </p>
                    <div className="featured-tags">
                      {project.tags.map((tag, j) => (
                        <span 
                          key={j} 
                          className={isDark ? "dark-mode-tag featured-tag" : "featured-tag"}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className={isDark ? "dark-mode-link featured-link" : "featured-link"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
