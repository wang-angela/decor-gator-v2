import { Navigate } from "react-router-dom";
import lake from "../assets/lake_bg.jpg";
import { useAuth } from "../hooks/useAuth";

const Welcome = () => {
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
      <h2 className="pt-5 display-5 text-center text-wrap">
        Welcome to DecorGator!
      </h2>
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

export default Welcome;
