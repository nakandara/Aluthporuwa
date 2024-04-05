import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Elevation() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4  mb-3">
          <div
            className="card border-success"
            style={{ maxWidth: "18rem", maxWidth: "none" }}
          >
            <div className="card-header bg-transparent border-success">
              Header
            </div>
            <div className="card-body text-success">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer bg-transparent border-success">
              Footer
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="card border-success"
            style={{ maxWidth: "18rem", maxWidth: "none" }}
          >
            <div className="card-header bg-transparent border-success">
              Header
            </div>
            <div className="card-body text-success">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer bg-transparent border-success">
              Footer
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="card border-success"
            style={{ maxWidth: "18rem", maxWidth: "none" }}
          >
            <div className="card-header bg-transparent border-success">
              Header
            </div>
            <div className="card-body text-success">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer bg-transparent border-success">
              Footer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
