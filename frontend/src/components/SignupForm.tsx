function SignupForm() {
  return (
    <>
      <form className="row g-3 py-5 mx-auto" style={{ width: "40%" }}>
        {/* First Name */}
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            placeholder="John"
          />
        </div>
        {/* Last Name */}
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder="Smith"
          />
        </div>
        {/* Email */}
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            placeholder="john.smith@domain.com"
          />
        </div>
        {/* Username */}
        <div className="col-md-6">
          <label htmlFor="inputUsername" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="inputUsername" />
        </div>
        {/* Password */}
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        {/* Sign up button */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end my-5">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "25%" }}
          >
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
