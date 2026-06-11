import React, {useContext,useEffect,useState} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting, openSource} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            console.error(result);
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            setProfileFunction("Error");
            console.log(
              "Because of this error, contact section has reverted to default"
            );
            console.error(error);
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="hero-social-bar">
              <span className="follow-me-text">Follow me</span>
              <SocialMedia />
            </div>
            
            <h4 className="hero-intro">Hey there, I'm</h4>
            
            <h1 className={isDark ? "dark-mode hero-name" : "hero-name"}>
              {greeting.username.split(" ")[0]}<br/>
              {greeting.username.split(" ").slice(1).join(" ")}
            </h1>
            
            <p className={isDark ? "dark-mode hero-desc" : "hero-desc"}>
              {greeting.subTitle}
            </p>
            
            <div className="hero-stats">
              <h2 className="stat-number">300+</h2>
              <p className="stat-text">Projects successfully completed</p>
            </div>
          </div>

          <div className="greeting-image-div">
            <div className="hero-image-wrapper">
              <img
                src={require("../../assets/images/my_photo.jpg")}
                alt="Nur Amin"
                className="hero-profile-img"
              />
              
              <div className="hero-floating-badge">
                <a href="https://calendly.com/nuraminislam/30min" target="_blank" rel="noopener noreferrer">Book a free<br/>consultancy call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
