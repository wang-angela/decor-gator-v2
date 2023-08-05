import { useState } from "react";
import { createUser } from "../middleware/userApi";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const user: User = {
      firstName: fname,
      lastName: lname,
      email: email,
      username: uname,
      password: password,
    };

    createUser(user);
    navigate("/Signup-complete");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="row g-3 py-5 mx-auto"
        style={{ width: "30%" }}
      >
        {/* First Name */}
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="John"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
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
            placeholder="Smith"
            value={lname}
            onChange={(event) => setLname(event.target.value)}
          />
        </div>
        {/* Email */}
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="john.smith@domain.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {/* Username */}
        <div className="col-md-6">
          <label htmlFor="inputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={uname}
            onChange={(event) => setUname(event.target.value)}
          />
        </div>
        {/* Password */}
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {/* Sign up button */}
        <div className="d-grid d-md-flex justify-content-md-center my-5">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "30%" }}
            disabled={!fname || !lname || !email || !uname || !password}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
