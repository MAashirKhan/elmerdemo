import React from "react";

function FeatureUI({ image, title, text }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div style={{ width: "90%", margin: "auto" }}>
        <img src={image} className="card-img-top img-fluid" alt={title} />
        <div className="card-body py-3">
          <h6 className="card-title text-dark fw-normal">{title}</h6>
          <p className="card-desc">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureUI;
