import React from "react";
import heroImg from "../../assets/heroimage.jpg";

function HeroSection() {
  return (
    <section
      id="herosection"
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
          }}
        >
          ELMER V1.0
        </p>
        <h1 className="py-2 fw-normal">
          Bootstrap Admin Dashboard Template
          <br /> & Powerful UI Kit with awesome features.
        </h1>
        <p
          className="mx-auto w-75"
          style={{
            color: "grey",
          }}
        >
          A professional package that comes with plenty of UI components,
          widgets, forms, tables, charts, pages and applications. Each one is
          fully customizable and exceptionally easy to use. The simplest and
          fastest way to build web UI for your dashboard.
        </p>
      </div>
      {/*End of Heading and Title*/}
      <img
        className="img-fluid ml-auto mr-auto p-3"
        src={heroImg}
        alt="heroimg"
      />
    </section>
  );
}

export default HeroSection;
