import lake from "../assets/lake_bg.jpg";
import LoginInput from "../components/LoginInput";

const Login = () => {
  const bg = "url(" + lake + ")";
  return (
    <>
      <div
        style={{
          backgroundImage: bg,
          height: "200px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />
      <h2 className="pt-5 display-5 text-center">Welcome Back, Gator!</h2>
      <p className="text-center">
        <a
          href="Signup"
          className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          Not a Gator?
        </a>
      </p>
      <LoginInput />
      <div
        style={{
          backgroundImage: bg,
          height: "200px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
    </>
  );
};

export default Login;
