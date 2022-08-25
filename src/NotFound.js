import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const urlNotFoundImage = "https://embed.lottiefiles.com/animation/86875";
  return (
    <>
      <div className="container-fluid">
        <h1
          className="d-flex justify-content-center"
          style={{ color: "#5921F6" }}
        >
          {" "}
          404 Not Found{" "}
        </h1>
        <iframe
          src={urlNotFoundImage}
          title={urlNotFoundImage}
          className="d-flex justify-content-center"
          width="100%"
          height="409px"
        ></iframe>
        <div className="d-grid col-md-2 mx-auto px-4">
          <Link to="/" className="btn-sign-up text-center">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};
