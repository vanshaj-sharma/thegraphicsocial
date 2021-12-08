import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Clientel from "./components/about/Clientel.js";
import Team from "./components/about/Team.js";
import We from "./components/about/We.js";
import MbAbout from "./mobile/mbAbout.js";
import "./styles/About.css";

function About() {
  const [select, setSelected] = useState("0");
  return (
    <>
      <div className="desktop">
        {/* lower shit show */}
        <div className="about__box">
          <div className="row ">
            <div className="col-7 col-lg-9"></div>
            <div className="col-5 col-lg-3 about__heading">
              <h1>ABOUT US</h1>
            </div>
          </div>
          {/* <div className="back__logo">
            <NavLink to="/">
              <i className="fab fa-3x fa-slack"></i>
            </NavLink>
          </div> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-7 col-lg-9 about__left">
                {select === "0" && (
                  <div className="content__active">
                    <We />
                  </div>
                )}
                {select === "1" && (
                  <div className="content__active">
                    <Team />
                  </div>
                )}
                {select === "2" && (
                  <div className="content__active">
                    <Clientel />
                  </div>
                )}
              </div>

              <div className="col-5 col-lg-3 d-flex flex-column  about__right">
                <button
                  className="button"
                  onClick={() => {
                    setSelected("0");
                  }}
                >
                  <span>WHO ARE WE?</span>
                </button>

                <button
                  className="button"
                  onClick={() => {
                    setSelected("1");
                  }}
                >
                  <span>OUR TEAM</span>
                </button>

                <button
                  className="button"
                  onClick={() => {
                    setSelected("2");
                  }}
                >
                  <span>CLIENTLE</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tabs"
          style={{
            paddingRight: "10rem",
            animation: "transitionUp 0.9s",
          }}
        >
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/work">OUR WORK</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
          <div className="d-flex justify-content-center">
            <NavLink to="/" className="text-light">
              <i className="fas fa-2x fa-times"></i>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mobile">{MbAbout()}</div>
    </>
  );
}

export default About;
