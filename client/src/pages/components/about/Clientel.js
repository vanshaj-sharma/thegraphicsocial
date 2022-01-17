import "./styles/Clientel.css";
import c1 from "../../assets/clientel/c1.png";
import c2 from "../../assets/clientel/c2.png";
import c3 from "../../assets/clientel/c3.png";
import c4 from "../../assets/clientel/c4.png";
import c5 from "../../assets/clientel/c5.png";
import c6 from "../../assets/clientel/c6.png";

import hirect from "../../assets/clientel/hirect.svg";
import meesho from "../../assets/clientel/meesho.svg";
import Moj from "../../assets/clientel/Moj.svg";
import buddweiser from "../../assets/clientel/buddweiser.svg";
import redbull from "../../assets/clientel/redbull.svg";
import Nissin from "../../assets/clientel/Nissin.svg";

function Clientel() {
  return (
    <>
      <div className="container">
        <h3 className="text-center">OUR CLIENTEL</h3>
        <div className="team__container client__content">
          <embed
            style={{ height: "7rem" }}
            className="img-fluid"
            src={buddweiser}
            alt=""
          />
          <embed
            style={{ height: "8rem" }}
            className="img-fluid"
            src={redbull}
            alt=""
          />
          <embed
            style={{ height: "8rem" }}
            className="img-fluid"
            src={Nissin}
            alt=""
          />
          <embed
            style={{ height: "5rem" }}
            className="img-fluid"
            src={hirect}
            alt=""
          />
          <embed
            style={{ height: "8rem" }}
            className="img-fluid"
            src={meesho}
            alt=""
          />
          <embed
            style={{ height: "8rem" }}
            className="img-fluid"
            src={Moj}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Clientel;
