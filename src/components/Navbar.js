import React from "react";

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="navbarDiv">
      <h1 id="nameTitle">Brandon Snyder</h1>
      <div className="nav-tabs">
        <a
          href="#Landing"
          onClick={() => handlePageChange("Landing")}
          className={currentPage === "Landing" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>

        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact me
        </a>
        {/* <a
              href="#FreelanceWork"
              onClick={() => handlePageChange("FreelanceWork")}
              className={
                currentPage === "FreelanceWork" ? "nav-link active" : "nav-link"
              }
            >
              Freelance Work
            </a> */}
      </div>
    </div>
  );
}
