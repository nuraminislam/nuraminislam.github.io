import React, { useContext } from "react";
import "./TechStackGrid.css";
import { techStackGrid } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function TechStackGrid() {
  const { isDark } = useContext(StyleContext);

  if (!techStackGrid.display) {
    return null;
  }

  return (
    <div className="tech-stack-container" id="techStackGrid">
      <Fade bottom duration={1000} distance="20px">
        <div className="tech-stack-header">
          <div className="tech-stack-pill">
            {techStackGrid.title}
          </div>
          <h2 className={isDark ? "dark-mode-title tech-stack-title" : "tech-stack-title"}>
            {techStackGrid.subtitle}
          </h2>
          <p className={isDark ? "dark-mode-text tech-stack-desc" : "tech-stack-desc"}>
            {techStackGrid.description}
          </p>
        </div>
      </Fade>

      <div className="tech-stack-grid">
        {techStackGrid.cards.map((card, i) => {
          return (
            <Fade bottom duration={1000} distance="20px" delay={i * 100} key={i}>
              <div className={isDark ? "dark-mode-card tech-stack-card" : "tech-stack-card"}>
                <h3 className={isDark ? "dark-mode-title tech-stack-card-title" : "tech-stack-card-title"}>
                  {card.title}
                </h3>
                <div className="tech-stack-tags">
                  {card.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={isDark ? "dark-mode-tag tech-stack-tag" : "tech-stack-tag"}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
