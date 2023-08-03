import lake from "../assets/lake2_bg.jpg";
import SignupForm from "../components/SignupForm";

const Signup = () => {
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
      <h2 className="pt-5 display-5 text-center">Get Your Decorating On!</h2>
      <p className="text-center">
        <a
          href="Login"
          className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          Already apart of the gator gang?
        </a>
      </p>
      <SignupForm />
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

export default Signup;
