import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0">
          Fahmi Nurfalah © <span id="footer-cr-years">2022</span>
        </p>
        <div className="mb-0">
          <a
            href="https://www.instagram.com/fahminurfalah_/"
            target="_blank"
            rel="noreferrer"
            className="icon-footer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/fahmi-nurfalah/"
            target="_blank"
            rel="noreferrer"
            className="icon-footer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
