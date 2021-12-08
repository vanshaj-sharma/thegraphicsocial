import "./styles/mbContact.css";
import { NavLink } from "react-router-dom";
import backLogo from "../../pages/assets/social.png";
function MbContact() {
  const buttonToggle = () => {
    const toggler = document.querySelector(".mb__button__toggle");
    toggler.classList.toggle("contact__activate");
    //Radio button off property
    const other1 = document.querySelector(".contact__form");
    const other2 = document.querySelector(".mbGetLoc");
    other1.classList.remove("contact__activate");
    other2.classList.remove("contact__activate");
  };
  const schedule = () => {
    const toggler = document.querySelector(".contact__form");
    toggler.classList.toggle("contact__activate");
    //Radio button off property
    const other1 = document.querySelector(".mb__button__toggle");
    const other2 = document.querySelector(".mbGetLoc");
    other1.classList.remove("contact__activate");
    other2.classList.remove("contact__activate");
  };
  const getMbLocation = () => {
    const toggler = document.querySelector(".mbGetLoc");
    toggler.classList.toggle("contact__activate");
    //Radio button off property
    const other1 = document.querySelector(".mb__button__toggle");
    const other2 = document.querySelector(".contact__form");
    other1.classList.remove("contact__activate");
    other2.classList.remove("contact__activate");
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
        <h1 className="contact__title">CONTACT US</h1>
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
        style={{
          overflowY: "scroll",
          height: "90vh",
          animation: "animate__service ease-in-out 1s",
        }}
      >
        <div className="contact__buttons">
          <button className="mb__button" onClick={() => buttonToggle()}>
            ENQUIRE NOW
          </button>
          <div className="mb__button__toggle">
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
            className="mb__button"
            onClick={() => {
              schedule();
            }}
          >
            SCHEDULE A CALL
          </button>
          <form action="" className="contact__form">
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
              getMbLocation();
            }}
            className="mb__button"
          >
            GET DIRECTIONS
          </button>
          <iframe
            title="map"
            className="mbGetLoc"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.3415232102146!2d74.85940156127025!3d31.621133611054443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197b53dfebf8b5%3A0xcfceb25f0cf9e679!2sBala%20Ji%20Refrigeration%20Works!5e0!3m2!1sen!2sin!4v1637601579274!5m2!1sen!2sin"
            style={{}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact__content">
          <h3>ADDRESS</h3>
          <p>BK DUTT GATE, AMRITSAR, PUNJAB, IN 143001</p>
          <h3>PHONE</h3>
          <p>+91-95014-46674</p>
          <h3>MAIL</h3>
          <p>CONTACT@ THEGRAPHIC SOCIAL .COM</p>
        </div>
      </div>
    </>
  );
}

export default MbContact;
