import React from "react";
import Logo from "../../assets/elmerlogo.png";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="navbar navbar-fixed navbar-expand-lg py-4">
      <div className="container px-4">
        <Link className="navbar-brand" to="/">
          <img className="img-fluid" src={Logo} alt="Logo" /> {` Elmer`}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*Main Menu*/}
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-item-center text-dark fw-300">
            <li className="nav-item">
              <Link className="nav-link" to="#demo">
                Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#uikits">
                UI Kit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#appsection">
                Apps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#pages">
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#ecommerce">
                E-Commerce
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://hencework.com/theme/elmer/full-width-light/documentation.html"
              >
                Documentation
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="btn mx-4 p-auto"
          style={{
            width: 150,
            backgroundColor: "#7688e2",
            borderRadius: "50px",
            color: "white",
          }}
        >
          Buy Elmer 30$
        </button>
        {/*End of Main Menu*/}
      </div>
    </nav>
  );
}

export default Navbar;
