import React, {useContext} from "react";
import "./CallToAction.css";
import {contactCTAInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CallToAction() {
  const {isDark} = useContext(StyleContext);

  if (!contactCTAInfo.display) {
    return null;
  }

  return (
    <div className="cta-section">
      <Fade bottom duration={1000} distance="20px">
        <div className="cta-container">
          
          <div className="cta-content">
            <h1 className="cta-title-first">{contactCTAInfo.titleFirst}</h1>
            <h1 className="cta-title-second">{contactCTAInfo.titleSecond}</h1>
            <p className={isDark ? "dark-mode cta-subtitle" : "cta-subtitle"}>
              {contactCTAInfo.subtitle}
            </p>
            
            <div className="cta-btn-group">
              <a href={contactCTAInfo.btn1Link} target="_blank" rel="noopener noreferrer" className="cta-btn-primary">
                {contactCTAInfo.btn1Text}
              </a>
              <a href={contactCTAInfo.btn2Link} target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                {contactCTAInfo.btn2Text}
              </a>
            </div>
          </div>

          <div className="cta-images-fan">
            {contactCTAInfo.images.map((imgSrc, index) => (
              <div 
                className={`cta-fan-card fan-card-${index + 1}`} 
                key={index}
              >
                <img src={imgSrc} alt={`CTA Fan ${index + 1}`} />
              </div>
            ))}
          </div>

        </div>
      </Fade>
    </div>
  );
}
