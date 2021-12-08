import React from "react";
import "./styles/Team.css";
import test from "../../../../pages/assets/test.jpg";

function Photos() {
  return (
    <>
      {/* <div className="Photos__mb col-md-3">
        <div className="row justify-content-center">
          <img className="Photos__content__mb img-fluid" src={test} alt="" />
          <h5 className="text-center">name1</h5>
        </div>
      </div> */}
      <div className="Photos__mb">
        <div className="justify-content-center">
          <img className="Photos__content__mb img-fluid" src={test} alt="" />
          <h5 className="Photos__title__mb">name</h5>
        </div>
      </div>
    </>
  );
}

function Team() {
  return (
    <>
      <div>
        <h4 style={{ marginTop: "0.5rem" }}>OUR TEAM</h4>
        <div className="team__container__mb animation_box">
          <Photos />
          <Photos />
          <Photos />
          <Photos />
          <Photos />
          <Photos />
        </div>
      </div>
    </>
  );
}

export default Team;
