import { useState } from "react";
import { getUser } from "../middleware/userApi";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { createAccessToken, verifyToken } from "../middleware/jwtApi";
import { useAccessToken } from "../hooks/useAccessToken";
import { useAuth } from "../hooks/useAuth";

function LoginForm() {
  const [accessToken, setAccessToken] = useAccessToken();
  const [isAuth, setIsAuth] = useAuth();
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const result = await getUser(uname);
    const correctPass = await bcrypt.compare(password, result.password);

    if (result == "User does not exist") {
      alert("User does not exists! Please try again.");
      return;
    }
    if (!correctPass) {
      alert("Incorrect password! Please try again.");
      return;
    }

    const access = await createAccessToken(uname, password);
    console.log(access);

    setAccessToken(access.accessToken);

    const verify = await verifyToken(accessToken);
    console.log(verify);
    if (!verify) {
      setIsAuth(true);
    }

    navigate("/Listings");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="row g-3 py-5 mx-auto"
        style={{ width: "30%" }}
      >
        {/* Username */}
        <div className="col-12">
          <label htmlFor="inputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            value={uname}
            onChange={(event) => setUname(event.target.value)}
          />
        </div>
        {/* Password */}
        <div className="col-12">
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

export default LoginForm;
