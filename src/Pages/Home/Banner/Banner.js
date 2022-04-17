import React from "react";
import "./Banner.css";
import TypeWriterEffect from "react-typewriter-effect";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text text-center text-white">
        <h4>HI THERE, I'M</h4>
        <h1 className="banner-title">MAHDY ABRAR SHARZY</h1>
        <h4 className="d-flex typing justify-content-center">
          I am a &nbsp;
          <TypeWriterEffect
          textStyle={{
            color: "#EA4C23",
            display: 'inline'
          }}
            startDelay={0}
            cursorColor="#EA4C23"
            multiText={["Gym Trainer", "Body Builder"]}
            multiTextDelay={1000}
            typeSpeed={100}
            multiTextLoop={true}
          />
        </h4>
        <button className="btn btn-light btn-lg rounded-pill">
            Contact Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
