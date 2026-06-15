import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Journey from "./journey/Journey";
import WorkExperience from "./workExperience/WorkExperience";
import Process from "./process/Process";
import Clients from "./clients/Clients";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import CallToAction from "./callToAction/CallToAction";
import TechStackGrid from "./techStackGrid/TechStackGrid";
import FeaturedWork from "./featuredWork/FeaturedWork";

import Footer from "../components/footer/Footer";

import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";


import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.css";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <div className="main-container">
              <Greeting />
            <Skills />
            <Education />
            <StackProgress />
            <Journey />
            <WorkExperience />
            <TechStackGrid />
            <FeaturedWork />
            <Process />
            <Clients />
            <Projects />
            <StartupProject />
            <CallToAction />
            <Footer />
            <ScrollToTopButton />
          </div>
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
