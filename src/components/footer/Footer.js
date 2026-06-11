import React, {useContext} from "react";
import "./Footer.css";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="simple-footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Copyright © 2026 All rights reserved by{" "}
          <a href="https://github.com/nuraminislam" target="_blank" rel="noopener noreferrer">
            Nur Amin
          </a>.
        </p>
      </div>
    </Fade>
  );
}
