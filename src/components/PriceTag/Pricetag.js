import React from "react";
import buyImg from "../../assets/buynow.jpg";

function PriceTag() {
  return (
    <section
      id="pricetag"
      style={{
        backgroundImage: `url(${buyImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "auto",
        width: "100%",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      {/*Heading and Title*/}
      <div className="container text-center">
        <p
          style={{
            color: "#667add",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          SEEN ENOUGH?
        </p>
        <h1 className="py-2 fw-normal text-white">
          All these features for the perfect price
        </h1>
        <h1
          className="fw-bold text-white"
          style={{
            fontSize: "90px",
          }}
        >
          30$
        </h1>
      </div>
      <button
        className="btn btn-md btn-outline-primary py-2 px-4 mt-2"
        style={{
          color: "#667add",
          borderRadius: 50,
          borderColor: "#667add",
        }}
      >
        Buy Elmer Now
      </button>
      {/*End of Heading and Title*/}
    </section>
  );
}

export default PriceTag;
