import React from "react";
import Card from "../Cards/Card";
import { demosData } from "../../data";

function Demo() {
  return (
    <section
      id="demo"
      style={{
        background: "#F1F6FA",
        height: "auto",
        width: "100%",
        paddingTop: "140px",
        paddingBottom: "140px",
      }}
    >
      {/*Heading and Title*/}
      <div className="container text-center">
        <p
          style={{
            color: "#667add",
            fontWeight: 400,
            fontSize: "14px",
            textTransform: "uppercase",
          }}
        >
          Pre-Built Dashboard
        </p>
        <h1 className="py-2 fw-normal">
          Super Charged Pack of
          <br /> Full Customizable & Easy to Use Demos.
        </h1>
      </div>
      {/*End of Heading and Title*/}
      {/*Demo Section*/}
      <div className="container">
        <div className="row mx-auto">
          {demosData.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </div>
      <button
        className="btn btn-md btn-outline-primary py-2 mt-5"
        style={{
          color: "#667add",
          borderRadius: 50,
          borderColor: "#667add",
        }}
      >
        More Coming Soon
      </button>

      {/*End Demo Section*/}
    </section>
  );
}

export default Demo;
