import "./styles/Card.css";
function Card({ pdf, title }) {
  return (
    <>
      <div className="Card">
        <div className="card__content">
          <iframe title="pdf" src={pdf + "#toolbar=0"} />
        </div>
        <div className="card__title d-flex justify-content-center">
          <h4>
            <a
              target="__blank"
              href={pdf}
              style={{ textDecoration: "none", color: "white" }}
            >
              {title}
            </a>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Card;
