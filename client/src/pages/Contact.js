import React from "react";
import "./styles/Contact.css";
import { NavLink } from "react-router-dom";
import MbContact from "./mobile/mbContact";

function Contact() {
  const buttonToggle = () => {
    const toggler = document.querySelector(".button__toggle");
    toggler.classList.toggle("activate");
    //Radio button off property
    const other1 = document.querySelector(".schedule__form");
    const other2 = document.querySelector(".getLoc");
    other1.classList.remove("activate");
    other2.classList.remove("activate");
  };
  const schedule = () => {
    const toggler = document.querySelector(".schedule__form");
    toggler.classList.toggle("activate");
    //Radio button off property
    const other1 = document.querySelector(".button__toggle");
    const other2 = document.querySelector(".getLoc");
    other1.classList.remove("activate");
    other2.classList.remove("activate");
  };
  const getLocation = () => {
    const toggler = document.querySelector(".getLoc");
    toggler.classList.toggle("activate");
    //Radio button off property
    const other1 = document.querySelector(".button__toggle");
    const other2 = document.querySelector(".schedule__form");
    other1.classList.remove("activate");
    other2.classList.remove("activate");
  };
  return (
    <>
      <div className="desktop">
        {/* lower shit show */}
        <div className="contact__box">
          <div className="row ">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-6 contact__heading">
              <h1>CONTACT US</h1>
            </div>
          </div>
          {/* <div className="back__logo">
            <NavLink to="/">
              <i class="fas fa-3x fa-arrow-right"></i>
            </NavLink>
          </div> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-lg-6 contact__left">
                <div className="contact__left__box">
                  <p>ADDRESS</p>
                  <p>BK DUTT GATE, AMRITSAR, PUNJAB, IN 143001</p>
                  <p>PHONE</p>
                  <p>+91-95014-46674</p>
                  <p>MAIL</p>
                  <p>CONTACT@ THEGRAPHIC SOCIAL .COM</p>
                </div>
              </div>
              <div className="col-6 col-lg-6 d-flex flex-column  contact__right">
                <button className="button" onClick={() => buttonToggle()}>
                  ENQUIRE NOW
                </button>
                <div className="button__toggle">
                  <a href="tel:+919501446674">
                    <i className="fas fa-2x fa-phone"></i>
                  </a>
                  <a href="mailto:CONTACT@THEGRAPHICSOCIAL.COM">
                    <i className="far fa-2x fa-envelope"></i>
                  </a>
                  <a href="https://wa.me/+919501446674">
                    <i className="fab fa-2x fa-whatsapp"></i>
                  </a>
                </div>
                <button
                  className="button"
                  onClick={() => {
                    schedule();
                  }}
                >
                  SCHEDULE A CALL
                </button>
                <form action="" className="schedule__form">
                  <input id="fname" type="text" placeholder="First Name" />
                  <input id="lname" type="text" placeholder="Last Name" />
                  <input id="meeting" type="date" />
                  <input id="meeting" type="time" />
                  <button className="btn btn-outline-light" type="submit">
                    Submit
                  </button>
                </form>
                <button
                  onClick={() => {
                    getLocation();
                  }}
                  className="button"
                >
                  GET DIRECTIONS
                </button>
                <iframe
                  title="map"
                  className="getLoc"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.3415232102146!2d74.85940156127025!3d31.621133611054443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197b53dfebf8b5%3A0xcfceb25f0cf9e679!2sBala%20Ji%20Refrigeration%20Works!5e0!3m2!1sen!2sin!4v1637601579274!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs" style={{ animation: "transitionUp 0.9s" }}>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/work">OUR WORK</NavLink>
          <div className="d-flex justify-content-center">
            <NavLink to="/" className="text-light">
              <i className="pr-5 fas fa-2x fa-times"></i>
            </NavLink>
          </div>
          <NavLink to="/about">ABOUT US</NavLink>
        </div>
      </div>

      <div className="mobile">{MbContact()}</div>
    </>
  );
}

export default Contact;
