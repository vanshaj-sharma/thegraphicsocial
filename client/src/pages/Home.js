import "./styles/Home.css";
import Logo from "./assets/LogoWebsite.svg";
import { NavLink } from "react-router-dom";
import mbHome from "./mobile/mbHome";

function Home() {
  return (
    <>
      <div className="desktop">
        <div className="social__box">
          <div className="social__content">
            <embed src={Logo} alt="Social logo" />
          </div>
          <div className="tabs">
            <NavLink to="/services">SERVICES</NavLink>
            <NavLink to="/work">OUR WORK</NavLink>
            <NavLink style={{ color: "black" }} to="/contact">
              CONTACT US
            </NavLink>
            <NavLink style={{ color: "black" }} to="/about">
              ABOUT US
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mobile">{mbHome()}</div>
    </>
  );
}

export default Home;
