import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile.jpg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
        </div>
      </div>
    </section>
  );
};

export default About;
