import Logo from "../assets/Logo.png";
import DecorGator from "../assets/DecorGator.png";
import ProfilePic from "./ProfilePicture";

function Navbar() {
  return (
    <>
      <nav className="px-5 navbar fixed-top bg-body">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt="Logo"
              width="auto"
              height="60"
              className="d-inline-block align-text-top"
            />
          </a>
          <a>
            <img
              src={DecorGator}
              alt="Text Logo"
              width="auto"
              height="60"
              className="mx-auto d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <div className="navbar-toggler-icon"></div>
          </button>

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
            <hr className="mx-3" />
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Log In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
