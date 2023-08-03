import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="px-3 navbar sticky-top bg-body">
        <div className="container-fluid">
          <Link
            className="navbar-brand link-dark"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <img
              src={logo}
              alt="Logo"
              width="auto"
              height="30px"
              className="d-inline-block"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <div className="navbar-toggler-icon"></div>
          </button>
        </div>
      </nav>

      {/* Right Popup Menu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            DecorGator
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              {/* Endpoint route to Sign up page*/}
              <Link
                className="navbar-brand link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
                to="/Signup"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              {/* Endpoint route to Login page */}
              <Link
                className="navbar-brand link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
                to="/Login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
