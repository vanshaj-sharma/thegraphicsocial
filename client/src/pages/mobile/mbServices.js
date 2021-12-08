import "./styles/mbServices.css";
import { useState } from "react";
import Branding from "./components/services/Branding";
import Designing from "./components/services/Designing";
import SocialM from "./components/services/SocialM";
import PhotoVideo from "./components/services/PhotoVideo";
import InfluentialM from "./components/services/InfluentialM";
import DigitalM from "./components/services/DigitalM";
import { NavLink } from "react-router-dom";
import backLogo from "../../pages/assets/social.png";
function MbServices() {
  const [select, setSelected] = useState("");
  const activate = (index) => {
    let service__heads = document.querySelectorAll(".service__heads");
    service__heads[index].classList.toggle("heading__deactivate");
    for (let i = 0; i < 6; i++) {
      if (i === index) continue;
      service__heads[i].classList.remove("heading__deactivate");
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          animation: "animate__service ease-in-out 1s",
        }}
      >
        <h1 className="s_title">SERVICES</h1>
        <NavLink to="/">
          <img
            style={{
              height: "30px",
              width: "30px",
              marginTop: "15px",
              marginRight: "20px",
            }}
            src={backLogo}
            alt=""
          />
        </NavLink>
      </div>
      <div className="menu">
        <div className="s_headings">
          <h1
            className="service__heads"
            onClick={() => {
              setSelected("0");
              activate(0);
            }}
          >
            BRANDING
          </h1>
          {select === "0" && <Branding set={setSelected} option={0} />}
          <h1
            className="service__heads"
            onClick={() => {
              setSelected("1");
              activate(1);
            }}
          >
            INFLUENTIAL MARKETING
          </h1>
          {select === "1" && <InfluentialM set={setSelected} option={1} />}
          <h1
            className="service__heads"
            onClick={() => {
              setSelected("2");
              activate(2);
            }}
          >
            DESIGNING
          </h1>
          {select === "2" && <Designing set={setSelected} option={2} />}

          <h1
            className="service__heads"
            onClick={() => {
              setSelected("3");
              activate(3);
            }}
          >
            SOCIAL MARKETING
          </h1>
          {select === "3" && <SocialM set={setSelected} option={3} />}

          <h1
            className="service__heads"
            onClick={() => {
              setSelected("4");
              activate(4);
            }}
          >
            PHOTOGRAPHY
          </h1>
          {select === "4" && <PhotoVideo set={setSelected} option={4} />}

          <h1
            className="service__heads"
            onClick={() => {
              setSelected("5");
              activate(5);
            }}
          >
            DIGITAL MARKETING
          </h1>
          {select === "5" && <DigitalM set={setSelected} option={5} />}
        </div>
      </div>
    </>
  );
}

export default MbServices;
