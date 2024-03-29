import { Link } from "react-router-dom";
import gator from "../assets/gator_boi.png";
import swamp from "../assets/swamp_bg.jpg";
import SignupForm from "../components/SignupForm";

const Home = () => {
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
        <figure className="py-5 my-5 text-center d-block figure">
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
              className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
            >
              https://www.vecteezy.com/free-vector/alligator-logo
            </a>
          </figcaption>
        </figure>
        <h2 className="pt-5 display-5 text-center">Join Us!</h2>
        <p className="text-center">
          <Link
            to="/Login"
            className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            Already apart of the swamp?
          </Link>
        </p>
        <SignupForm />
      </div>
    </>
  );
};

export default Home;
