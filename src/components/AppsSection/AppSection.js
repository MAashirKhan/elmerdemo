import React from "react";
import Card from "../Cards/Card";
import { appsData } from "../../data";

function AppSection() {
  return (
    <section
      id="appsection"
      style={{
        background: "#EDF0F5",
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
          WORKING APPS & SOCIAL FEEDS
        </p>
        <h1 className="py-2 fw-normal">
          A collection of working apps
          <br /> & live social media feeds.
        </h1>
      </div>
      {/*End of Heading and Title*/}
      {/*Apps Section*/}
      <div className="container mt-5">
        <div className="row mx-auto">
          {appsData.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </div>

      {/*End Apps Section*/}
    </section>
  );
}

export default AppSection;
