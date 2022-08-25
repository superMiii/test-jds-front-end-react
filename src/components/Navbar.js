import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (!result.isConfirmed) return false;
      return true;
    });
    if (confirm) {
      Swal.fire({
        icon: "success",
        title: "Successfully...",
        text: "Berhasil logout",
      });
      localStorage.removeItem("user");
      navigate("/sign-in");
    }
  };
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span>LOGO</span>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <NavLink to="data" className="nav-link">
                    Data
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ml-auto">
              {isLoggedIn ? (
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {isLoggedIn.email}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="sign-in" className="btn-sign-in">
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
