import "./styles/Services.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Branding from "./components/services/Branding";
import DigitalMarketing from "./components/services/DigitalMarketing";
import Designing from "./components/services/Designing";
import SocialMedia from "./components/services/SocialMedia";
import PhotoVideo from "./components/services/PhotoVideo";
import mbServices from "./mobile/mbServices";

function Services() {
  const [select, setSelected] = useState("0");
  const activate = (index) => {
    let toggler = document.querySelectorAll(".link");
    toggler[index].classList.toggle("link__active");
    for (let i = 0; i < 6; i++) {
      if (i === index) continue;
      toggler[i].classList.remove("link__active");
    }
  };
  useEffect(() => {
    activate(0);
  }, []);
  return (
    <>
      <div className="desktop">
        <div className="services__box">
          <div className="services__heading">
            <h1>SERVICES</h1>
          </div>
          {/* <div className="back__logo">
            <NavLink to="/">
              <i class="fas fa-3x fa-anchor"></i>
            </NavLink>
          </div> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-lg-4 services__left">
                <h1
                  onClick={() => {
                    setSelected("0");
                    activate(0);
                  }}
                >
                  <span className="link">BRANDING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("1");
                    activate(1);
                  }}
                >
                  <span className="link">DIGITAL MARKETING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("2");
                    activate(2);
                  }}
                >
                  <span className="link">INFLUENCER MARKETING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("3");
                    activate(3);
                  }}
                >
                  <span className="link">DESIGNING</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("4");
                    activate(4);
                  }}
                >
                  <span className="link">SOCIAL MEDIA</span>
                </h1>
                <h1
                  onClick={() => {
                    setSelected("5");
                    activate(5);
                  }}
                >
                  <span className="link">PHOTOGRAPHY</span>
                </h1>
              </div>
              <div className="col-6 col-lg-8 services__right">
                {select === "0" && <Branding />}
                {select === "1" && <DigitalMarketing />}
                {select === "2" && <h1>Influeencer</h1>}
                {select === "3" && <Designing />}
                {select === "4" && <SocialMedia />}
                {select === "5" && <PhotoVideo />}
              </div>
            </div>
          </div>
        </div>
        <div className="tabs" style={{ animation: "transitionUp 0.9s" }}>
          <div className="d-flex justify-content-center">
            <NavLink to="/" className="text-light">
              <i className="pl-5 fas fa-2x fa-times"></i>
            </NavLink>
          </div>
          <NavLink to="/work">OUR WORK</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
        </div>
      </div>
      <div className="mobile">{mbServices()}</div>
    </>
  );
}

export default Services;
