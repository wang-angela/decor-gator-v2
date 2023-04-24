import logo from "../assets/logo.png";
import decorgator from "../assets/decorgator.png";

function Navbar() {
  return (
    <>
      <nav className="px-5 navbar navbar-expand-lg bg-body">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="auto"
              height="60"
              className="d-inline-block align-text-top"
            />
          </a>
          <a>
            <img
              src={decorgator}
              alt="Text Logo"
              width="auto"
              height="60"
              className="mx-auto d-inline-block align-text-top"
            />
          </a>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-outline-success me-md-2" type="button">
              Sign Up
            </button>
            <button className="btn btn-outline-success" type="button">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
