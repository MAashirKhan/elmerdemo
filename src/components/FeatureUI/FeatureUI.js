import React from "react";

function FeatureUI({ image, title, para }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div style={{ width: "90%", margin: "auto" }}>
        <img
          src={image}
          className="img-fluid"
          style={{
            width: "15%",
            height: "auto",
          }}
          alt={title}
        />
        <div className="card-body py-3">
          <h5 className="card-title text-dark fw-normal mb-2">{title}</h5>
          <p className="card-desc text-muted">{para}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureUI;
