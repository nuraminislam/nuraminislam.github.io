import React, {useContext, useState} from "react";
import "./WorkExperience.css";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (workExperiences.display) {
    return (
      <div id="experience" className="work-exp-section">
        <Fade bottom duration={1000} distance="20px">
          <div className="work-exp-container">
            
            <div className="work-exp-header">
              <h1 className="work-exp-main-title">
                Experience
              </h1>
              <h4 className="work-exp-subtitle">
                {workExperiences.subtitle}
              </h4>
            </div>

            <div className="work-exp-accordion">
              {workExperiences.experience.map((item, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <div 
                    className="work-exp-item" 
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="work-exp-item-content">
                      <div className="work-exp-item-header">
                        <div className="work-exp-item-title-group">
                          <span className="work-exp-item-id">{item.id}</span>
                          <h2 className={`work-exp-item-title ${isHovered ? 'hovered-text' : ''}`}>
                            {item.title}
                          </h2>
                        </div>
                        <div className={`work-exp-icon-btn ${isHovered ? 'hovered-btn' : ''}`}>
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </div>
                      
                      <div className={`work-exp-item-desc-wrapper ${isHovered ? 'expanded' : ''}`}>
                        <p className="work-exp-item-desc">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Floating Image */}
                    <div className={`work-exp-floating-image ${isHovered ? 'visible' : ''}`}>
                      <img src={item.image} alt={item.title} />
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
  return null;
}
