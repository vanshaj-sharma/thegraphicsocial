import "./styles/mbAbout.css";
import We from "./components/about/We";
import Team from "./components/about/Team";
import Clientel from "./components/about/Clientel";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import backLogo from "../../pages/assets/social.png";
function MbAbout() {
  const [select, setSelected] = useState("0");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          animation: "animate__about ease-in-out 1s",
        }}
      >
        <h1 className="about__title">ABOUT US</h1>
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
      <div className="about__page__mb">
        <div className="about__content">
          {select === "0" && <We />}
          {select === "1" && <Team />}
          {select === "2" && <Clientel />}
        </div>

        <div>
          <div className="about__buttons">
            <button className="mb__button__ab" onClick={() => setSelected("0")}>
              WHO ARE WE?
            </button>
            <button className="mb__button__ab" onClick={() => setSelected("1")}>
              TEAM
            </button>
            <button className="mb__button__ab" onClick={() => setSelected("2")}>
              CLIENTELE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MbAbout;
