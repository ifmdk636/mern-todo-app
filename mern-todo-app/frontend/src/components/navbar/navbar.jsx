import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index.js";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ms-3">
          <a
            className="navbar-brand fs-3 text fw-bolder text-uppercase"
            href="#"
          >
            To Do List
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex justify-content-end me-4">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/register"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                    >
                      Sign In
                    </a>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button
                    className="nav-link active btn btn-link"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </li>
              )}
              <img
                className="img-user img-fluid 100x100"
                alt="/"
                href="#"
                src="10337609.png"
              ></img>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
