import React from "react";
import Card from "../Cards/Card";
import { pagesData } from "../../data";

function ExtraPages() {
  return (
    <section
      id="pages"
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
          EXTRA PAGES
        </p>
        <h1 className="py-2 fw-normal">Authentication & Error pages</h1>
      </div>
      {/*End of Heading and Title*/}
      {/*Pages Section*/}
      <div className="container mt-5">
        <div className="row mx-auto">
          {pagesData.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </div>
      {/*End Pages Section*/}
    </section>
  );
}

export default ExtraPages;
