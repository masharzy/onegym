import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <h1 className="about-title">About Me</h1>
        <h4 className="mb-4 name">
          HI THERE, I'M <br /> <b>MAHDY ABRAR SHARZY</b>
        </h4>
        <h5 className="email">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <a href="mailto:masharzya1@gmail.com">masharzya1@gmail.com</a>
        </h5>
        <h5 className="mb-4 phone">
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <a href="tel:+8801639722575">+8801639722575</a>
        </h5>
        <p className="myGoal mx-auto mb-5">
          My goal is to become a full-stack web developer. I want to be a <br />
          freelancer. I want to learn web development from programming hero to
          pro in front and backend. <br />
          I will try my best to achieve my goal by hard work and dedication.
        </p>
      </div>
    </div>
  );
};

export default About;
