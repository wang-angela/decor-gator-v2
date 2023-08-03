import lake from "../assets/lake_bg.jpg";

const Login = () => {
  const bg = "url(" + lake + ")";
  return (
    <>
      <div
        style={{
          backgroundImage: bg,
          height: "100px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <h2 className="pt-5 display-5 text-center">Welcome Back, Gator!</h2>
      <p className="text-center">
        <a
          href="Login"
          className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          Not a Gator?
        </a>
      </p>
    </>
  );
};

export default Login;
