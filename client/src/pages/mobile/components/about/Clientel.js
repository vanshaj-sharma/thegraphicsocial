import "./styles/Clientel.css";
import hirect from "../../../../pages/assets/clientel/hirect.svg";
import meesho from "../../../../pages/assets/clientel/meesho.svg";
import Moj from "../../../../pages/assets/clientel/Moj.svg";
import buddweiser from "../../../../pages/assets/clientel/buddweiser.svg";
import redbull from "../../../../pages/assets/clientel/redbull.svg";
import Nissin from "../../../../pages/assets/clientel/Nissin.svg";
function Clientel() {
  return (
    <>
      <div className="animation_box">
        <h4 style={{ marginTop: "0.5rem" }}>OUR CLIENTEL</h4>
        <div
          style={{ marginRight: "2rem" }}
          className="team__container__mb client__content"
        >
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
