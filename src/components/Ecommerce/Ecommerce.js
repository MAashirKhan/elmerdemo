import React from "react";
import ecommerceImg from "../../assets/ecommerce.jpg";
import Card from "../Cards/Card";
import { ecommerceData } from "../../data";

function Ecommerce() {
  return (
    <section
      id="ecommerce"
      style={{
        backgroundImage: `url(${ecommerceImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
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
          ECOMMERCE
        </p>
        <h1 className="py-2 fw-normal text-white">
          A Complete Set of E-Commerce Pages.
        </h1>
      </div>
      {/*End of Heading and Title*/}
      {/*Ecommerce Section*/}
      <div class="container mt-5">
        <div class="row mx-auto">
          {ecommerceData.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </div>

      {/*End Ecommerce Section*/}
    </section>
  );
}

export default Ecommerce;
