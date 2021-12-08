import "./styles/mbHome.css";
import Logo from "../assets/mbLogo.png";
import { NavLink } from "react-router-dom";
function mbHome() {
  return (
    <>
      <div className="mbHome__box">
        <NavLink className="top__left" to="/contact">
          CONTACT US
        </NavLink>
        <NavLink className="top__right" to="/about">
          ABOUT US
        </NavLink>
        <NavLink className="bottom__left" to="/services">
          SERVICES
        </NavLink>
        <NavLink className="bottom__right" to="/work">
          WORK
        </NavLink>
        <div className="mbHome__content">
          <img src={Logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default mbHome;
