import { useWindowSize } from "usehooks-ts";
import lake from "../assets/lake2_bg.jpg";
import Confetti from "react-confetti";
import gator from "../assets/party_hat_gator.png";

const ThankYou = () => {
  const bg = "url(" + lake + ")";
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        recycle={false}
      />
      <div
        style={{
          backgroundImage: bg,
          height: "200px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />
      <h2 className="pt-5 display-5 text-center">
        Welcome to the World of DecorGator!
      </h2>
      <figure className="py-5 my-5 text-center d-block figure">
        <img
          src={gator}
          alt="Gator with a party hat"
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

export default ThankYou;
