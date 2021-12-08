import Card from "./Card.js";
import ARSHAGROVERMAKEUP from "../../assets/photography/ARSHAGROVERMAKEUP.pdf";
import POP_CULTURE from "../../assets/photography/POP_CULTURE.pdf";
import PREWEDDING from "../../assets/photography/PREWEDDING_compressed.pdf";
import shahzadi from "../../assets/photography/shahzadi._compressed.pdf";
import ShalePashm from "../../assets/photography/Shal-e-Pashm_compressed.pdf";
import TAANI_STORE from "../../assets/photography/TAANI_STORE._compressed.pdf";
import THE_MODERN_DAY_QUEEN from "../../assets/photography/THE_MODERN_DAY_QUEEN_compressed.pdf";
function PhotographyPdf() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Card pdf={ARSHAGROVERMAKEUP} title="ARSHAGROVER MAKEUP" />
          </div>
          <div className="col-lg-6">
            <Card pdf={POP_CULTURE} title="POP CULTURE" />
          </div>
          <div className="col-lg-6">
            <Card pdf={PREWEDDING} title="PREWEDDING" />
          </div>
          <div className="col-lg-6">
            <Card pdf={shahzadi} title="Shahzadi" />
          </div>
          <div className="col-lg-6">
            <Card pdf={ShalePashm} title="ShalePashm" />
          </div>
          <div className="col-lg-6">
            <Card pdf={TAANI_STORE} title="TAANI STORE" />
          </div>
          <div className="col-lg-6">
            <Card pdf={THE_MODERN_DAY_QUEEN} title="THE MODERN DAY QUEEN" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotographyPdf;
