import React from "react";
import uiKitImg from "../../assets/uikit.jpg";

function UIKits() {
  return (
    <section
      id="uikits"
      style={{
        backgroundColor: "#2B3E4C",
        height: "auto",
        width: "100%",
        paddingTop: "140px",
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
          ADAPTIVE & FLEXIBLE UI KIT
        </p>
        <h1 className="py-2 fw-normal text-white">
          Complete Design System.
          <br />
          Build your backend in minutes for any platform.
        </h1>
        <p
          className="mx-auto w-100"
          style={{
            color: "grey",
          }}
        >
          Massive collection of fully customizable UI components, closely
          related to each other and combined on different levels, regarding
          systematic design principles. Ultimate tool to boosting up your
          working process. Enables you to create pages that look great and work
          seamlessly across mobile and desktop devices.
        </p>
      </div>
      {/*End of Heading and Title*/}
      <img className="img-fluid mt-3" src={uiKitImg} alt="heroimg" />
    </section>
  );
}

export default UIKits;
