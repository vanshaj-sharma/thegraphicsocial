import "./styles/Card.css";
function Card({ pdf, title, pic }) {
  return (
    <>
      <div className="Card">
        <div className="card__content">
          <a target="__blank" href={pdf}>
            <img className="img-fluid" src={pic} alt="" />
            <div className="card__title d-flex justify-content-center">
              <h4 style={{ color: "white" }}>{title}</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
