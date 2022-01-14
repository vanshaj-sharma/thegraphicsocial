import Card from "../../../../components/works/Card.js";
import ARSHAGROVERMAKEUP from "../../../../assets/photography/ARSHAGROVERMAKEUP.pdf";
import POP_CULTURE from "../../../../assets/photography/POP_CULTURE.pdf";
import PREWEDDING from "../../../../assets/photography/PREWEDDING_compressed.pdf";
import shahzadi from "../../../../assets/photography/shahzadi._compressed.pdf";
import ShalePashm from "../../../../assets/photography/Shal-e-Pashm_compressed.pdf";
import TAANI_STORE from "../../../../assets/photography/TAANI_STORE._compressed.pdf";
import THE_MODERN_DAY_QUEEN from "../../../../assets/photography/THE_MODERN_DAY_QUEEN_compressed.pdf";
import A from "../../../../assets/photography/thumbnails/ARSHAGROVERMAKEUP.png";
import B from "../../../../assets/photography/thumbnails/POP_CULTURE.png";
import C from "../../../../assets/photography/thumbnails/PREWEDDING_compressed.png";
import D from "../../../../assets/photography/thumbnails/shahzadi._compressed.png";
import E from "../../../../assets/photography/thumbnails/Shal-e-Pashm_compressed.png";
import F from "../../../../assets/photography/thumbnails/TAANI_STORE._compressed.png";
import G from "../../../../assets/photography/thumbnails/THE_MODERN_DAY_QUEEN_compressed.pdf.png";
function PhotographyPdf() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Card pic={A} pdf={ARSHAGROVERMAKEUP} title="ARSHAGROVER MAKEUP" />
          </div>
          <div className="col-lg-6">
            <Card pic={B} pdf={POP_CULTURE} title="POP CULTURE" />
          </div>
          <div className="col-lg-6">
            <Card pic={C} pdf={PREWEDDING} title="PREWEDDING" />
          </div>
          <div className="col-lg-6">
            <Card pic={D} pdf={shahzadi} title="Shahzadi" />
          </div>
          <div className="col-lg-6">
            <Card pic={E} pdf={ShalePashm} title="ShalePashm" />
          </div>
          <div className="col-lg-6">
            <Card pic={F} pdf={TAANI_STORE} title="TAANI STORE" />
          </div>
          <div className="col-lg-6">
            <Card
              pic={G}
              pdf={THE_MODERN_DAY_QUEEN}
              title="THE MODERN DAY QUEEN"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotographyPdf;
