import React from "react";

const Card = ({ title, link, image }) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
      <div className="card shadow" style={{ width: "100%" }}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <img src={image} className="card-img-top img-fluid" alt={title} />
          <div className="card-body">
            <h6 className="card-title text-dark fw-normal">{title}</h6>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
