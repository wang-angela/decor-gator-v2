import gator from "../assets/gator_boi.png";
import SignUpForm from "../components/SignUpForm";

const Signup = () => {
  return (
    <>
      <div style={{ height: "1000px" }}>
        <div
          style={{
            backgroundImage: "url(src/assets/swamp_bg.jpg)",
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
        <SignUpForm />
      </div>
    </>
  );
};

export default Signup;
