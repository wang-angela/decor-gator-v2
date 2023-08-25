import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbar() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="px-3 navbar sticky-top bg-body">
        <div className="container-fluid">
          <Link className="navbar-brand link-dark" to="/">
            <img
              src={logo}
              alt="Logo"
              width="auto"
              height="30px"
              className="d-inline-block"
            />
          </Link>
          <Button variant="light" onClick={handleShow}>
            <div className="navbar-toggler-icon"></div>
          </Button>
        </div>
      </nav>

      {/* Right Popup Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5>
              <Link
                to="/"
                className="link-dark link-offset-2 link-underline-opacity-0"
                onClick={toggle}
              >
                DecorGator
              </Link>
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              {/* Endpoint route to Sign up page*/}
              <Link
                to="/Signup"
                className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
                onClick={toggle}
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              {/* Endpoint route to Login page */}
              <Link
                to="/Login"
                className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
                onClick={toggle}
              >
                Login
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-body">
          <ul className="justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              {/* Endpoint route to Sign up page*/}
              <Link
                to="/Signup"
                className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              {/* Endpoint route to Login page */}
              <Link
                to="/Login"
                className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
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
