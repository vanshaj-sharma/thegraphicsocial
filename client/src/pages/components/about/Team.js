import React from "react";
import "./styles/Team.css";
import test from "../../assets/test.jpg";

function Photos() {
  return (
    <>
      <div className="Photos col-md-3">
        <div className="d-flex justify-content-center">
          <img className="Photos__content img-fluid" src={test} alt="" />
        </div>
        <div className="Photos__title mt-2">
          <h5 className="text-center pl-3">name1</h5>
        </div>
      </div>
    </>
  );
}

function Team() {
  return (
    <>
      <div className="container">
        <h3 className="text-center">OUR TEAM</h3>
        <div className="team__container">
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
