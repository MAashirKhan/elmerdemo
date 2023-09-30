import React from "react";
import { featuresData } from "../../data";
import FeatureUI from "../FeatureUI/FeatureUI";

function Features() {
  return (
    <section
      id="features"
      style={{
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
          Feature Rich
        </p>
        <h1 className="py-2 fw-normal">
          Built with Latest Technologies
          <br /> to make your life easier & work efficient.
        </h1>
      </div>
      {/*End of Heading and Title*/}
      {/*Demo Section*/}
      <div className="container mt-5">
        <div className="row mx-auto">
          {featuresData.map((card, index) => {
            return <FeatureUI key={index} {...card} />;
          })}
        </div>
      </div>
      {/*End Demo Section*/}
    </section>
  );
}

export default Features;
