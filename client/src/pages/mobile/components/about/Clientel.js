import "./styles/Clientel.css";
import c1 from "../../../../pages/assets/clientel/c1.png";
import c2 from "../../../../pages/assets/clientel/c2.png";
import c3 from "../../../../pages/assets/clientel/c3.png";
import c4 from "../../../../pages/assets/clientel/c4.png";
import c5 from "../../../../pages/assets/clientel/c5.png";
import c6 from "../../../../pages/assets/clientel/c6.png";
function Clientel() {
  return (
    <>
      <div className="animation_box">
        <h4 style={{ marginTop: "0.5rem" }}>OUR CLIENTEL</h4>
        <div
          style={{ marginRight: "2rem" }}
          className="team__container__mb client__content"
        >
          <img className="img-fluid" src={c1} alt="" />
          <img className="img-fluid" src={c2} alt="" />
          <img className="img-fluid" src={c3} alt="" />
          <img className="img-fluid" src={c4} alt="" />
          <img className="img-fluid" src={c5} alt="" />
          <img className="img-fluid" src={c6} alt="" />
        </div>
      </div>
    </>
  );
}

export default Clientel;
