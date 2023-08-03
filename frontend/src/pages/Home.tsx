import gator from "../assets/gator_boi.png";
import swamp from "../assets/swamp_bg.jpg";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  const bg = "url(" + swamp + ")";
  return (
    <>
      <div style={{ height: "1000px" }}>
        <div
          style={{
            backgroundImage: bg,
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="py-5 display-5 text-center">Welcome to the Swamp</h2>
        </div>
      </div>
      <div>
        <figure className="my-5 text-center d-block figure">
          <img
            src={gator}
            alt="Gator Logo"
            width="auto"
            height="400px"
            className="figure-img"
          />
          <figcaption className="figure-caption">
            <a
              href="https://www.vecteezy.com/free-vector/alligator-logo"
              style={{ textDecoration: "none" }}
              className="link-secondary"
            >
              https://www.vecteezy.com/free-vector/alligator-logo
            </a>
          </figcaption>
        </figure>
        <h2 className="pt-5 display-5 text-center">Join Us!</h2>
        <a
          className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          href="#"
        >
          Underline opacity 0
        </a>
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
