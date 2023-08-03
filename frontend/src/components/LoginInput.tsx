function LoginInput() {
  return (
    <>
      <form className="row g-3 py-5 mx-auto" style={{ width: "30%" }}>
        {/* Username */}
        <div className="col-12">
          <label htmlFor="inputUsername" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="inputUsername" />
        </div>
        {/* Password */}
        <div className="col-12">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        {/* Sign up button */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-center my-5">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "30%" }}
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginInput;
