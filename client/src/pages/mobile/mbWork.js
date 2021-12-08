import { useState } from "react";
import Branding from "./components/work/Branding.js";
import BrandStrategy from "./components/work/BrandStrategy";
import PhotoEditing from "./components/work/PhotoEditing";
import Photography from "./components/work/Photography";
import SocialMedia from "./components/work/SocialMedia";
import VideoEditing from "./components/work/VideoEditing";
import Videography from "./components/work/Videography";
import { NavLink } from "react-router-dom";
import backLogo from "../../pages/assets/social.png";
function MbWork() {
  const [clicked, setclicked] = useState("");
  const activate = (index) => {
    let work__head = document.querySelectorAll(".work__head");
    work__head[index].classList.toggle("heading__deactivate");
    for (let i = 0; i < 7; i++) {
      if (i === index) continue;
      work__head[i].classList.remove("heading__deactivate");
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          animation: "animate__work ease-in-out 1s",
        }}
      >
        <h1 className="s_title">OUR WORK</h1>
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
      <div
        className="menu"
        style={{ animation: "animate__work ease-in-out 1s" }}
      >
        <div className="s_headings">
          <h1
            className="work__head"
            onClick={() => {
              setclicked("0");
              activate(0);
            }}
          >
            BRANDING
          </h1>
          {clicked === "0" && <Branding set={setclicked} option={0} />}
          <h1
            className="work__head"
            onClick={() => {
              setclicked("1");
              activate(1);
            }}
          >
            PHOTOGRAPHY
          </h1>
          {clicked === "1" && <Photography set={setclicked} option={1} />}

          <h1
            className="work__head"
            onClick={() => {
              setclicked("2");
              activate(2);
            }}
          >
            VIDEOGRAPHY
          </h1>
          {clicked === "2" && <Videography set={setclicked} option={2} />}

          <h1
            className="work__head"
            onClick={() => {
              setclicked("3");
              activate(3);
            }}
          >
            PHOTO EDITING
          </h1>
          {clicked === "3" && <PhotoEditing set={setclicked} option={3} />}

          <h1
            className="work__head"
            onClick={() => {
              setclicked("4");
              activate(4);
            }}
          >
            VIDEO EDITING
          </h1>
          {clicked === "4" && <VideoEditing set={setclicked} option={4} />}

          <h1
            className="work__head"
            onClick={() => {
              setclicked("5");
              activate(5);
            }}
          >
            BRAND STRATEGY
          </h1>
          {clicked === "5" && <BrandStrategy set={setclicked} option={5} />}

          <h1
            className="work__head"
            onClick={() => {
              setclicked("6");
              activate(6);
            }}
          >
            SOCIAL MEDIA
          </h1>
          {clicked === "6" && <SocialMedia set={setclicked} option={6} />}
        </div>
      </div>
    </>
  );
}

export default MbWork;
