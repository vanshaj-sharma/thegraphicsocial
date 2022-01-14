import Card from "../../../../components/works/Card.js";
import brandLogo from "../../../../assets/branding/The Graphic Social.pdf";
import gizmosity from "../../../../assets/branding/Gizmosity.pdf";
import glow from "../../../../assets/branding/glow.pdf";
import uphaar from "../../../../assets/branding/Uphaar.pdf";
import A from "../../../../assets/branding/thumbnails/TheGraphicSocial.png";
import B from "../../../../assets/branding/thumbnails/Gizmosity.png";
import C from "../../../../assets/branding/thumbnails/glow.png";
import D from "../../../../assets/branding/thumbnails/Uphaar.png";
function BrandLogo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Card pic={A} pdf={brandLogo} title="Brand" />
          </div>
          <div className="col-lg-6">
            <Card pic={B} pdf={gizmosity} title="Gizmosity" />
          </div>
          <div className="col-lg-6">
            <Card pic={C} pdf={glow} title="Glow" />
          </div>
          <div className="col-lg-6">
            <Card pic={D} pdf={uphaar} title="Uphaar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandLogo;
