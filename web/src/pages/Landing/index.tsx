import React from "react";

import logImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logImg} alt="logo img" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={landingImg} alt="plataforma estudos" className="hero-image" />
        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="study" />
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="give-classes" />
            Dar aulas
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeart} alt="coração-roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
