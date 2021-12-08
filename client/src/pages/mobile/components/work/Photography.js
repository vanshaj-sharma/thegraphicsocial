import PhotographyPdf from "./helper/PhotographyPdf";

function Photography({ set, option }) {
  const goBack = () => {
    let work__head = document.querySelectorAll(".work__head");
    work__head[option].classList.remove("heading__deactivate");
    set("");
  };
  return (
    <div className="mb__brand_box">
      <div className="mb__box ml-4 mr-3">
        <h2>Photography</h2>
        <i
          onClick={() => {
            goBack();
          }}
          className=" text-center fas  fa-times"
        ></i>
      </div>
      <div>
        <PhotographyPdf />
      </div>
    </div>
  );
}
export default Photography;
