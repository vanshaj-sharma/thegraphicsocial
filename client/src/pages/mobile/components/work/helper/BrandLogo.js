import Card from "./Card.js";
import brandLogo from "../../../../assets/branding/The Graphic Social.pdf";
import gizmosity from "../../../../assets/branding/Gizmosity.pdf";
import glow from "../../../../assets/branding/glow.pdf";
import uphaar from "../../../../assets/branding/Uphaar.pdf";
function BrandLogo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Card pdf={brandLogo} title="Brand" />
          </div>
          <div className="col-lg-6">
            <Card pdf={gizmosity} title="Gizmosity" />
          </div>
          <div className="col-lg-6">
            <Card pdf={glow} title="Glow" />
          </div>
          <div className="col-lg-6">
            <Card pdf={uphaar} title="Uphaar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandLogo;
