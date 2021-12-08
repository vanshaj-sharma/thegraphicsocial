import "./styles/Clientel.css";
import c1 from "../../assets/clientel/c1.png";
import c2 from "../../assets/clientel/c2.png";
import c3 from "../../assets/clientel/c3.png";
import c4 from "../../assets/clientel/c4.png";
import c5 from "../../assets/clientel/c5.png";
import c6 from "../../assets/clientel/c6.png";
function Clientel() {
  return (
    <>
      <div className="container">
        <h3 className="text-center">OUR CLIENTEL</h3>
        <div className="team__container client__content">
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
