import React from "react";
import Logo from "../../assets/elmerlogo.png";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="navbar fixed-top bg-white navbar-expand-lg py-4">
      <div className="container px-4">
        {/* Logo */}
        <Link className="navbar-brand" to="#herosection">
          <img className="img-fluid" src={Logo} alt="Logo" /> {` Elmer`}
        </Link>
        {/* Toggle Button */}
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
        {/* Main Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ms-auto"
            style={{
              textAlign: "left",
            }}
          >
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
              <a
                className={"nav-link"}
                href={
                  "https://hencework.com/theme/elmer/full-width-light/documentation.html"
                }
                target={"_blank"}
                rel={"noreferrer"}
              >
                Documentation
              </a>
            </li>
            {/* Button */}
            <button
              className="btn p-auto mx-2"
              style={{
                width: 150,
                backgroundColor: "#7688e2",
                borderRadius: "50px",
                color: "white",
              }}
            >
              Buy Elmer $30
            </button>
          </ul>
        </div>
        {/* End of Main Menu */}
      </div>
    </nav>
  );
}

export default Navbar;
