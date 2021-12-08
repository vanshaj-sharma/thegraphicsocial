import React, { useState } from "react";
import "../../../../components/works/styles/Card.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function Card({ pdf, title }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="Card">
        <div className="card__content">
          {/* <canvas id="my_canvas" style={{ height: "200px", width: "200px" }} /> */}

          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} height="300" scale="0.7" />
          </Document>
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
