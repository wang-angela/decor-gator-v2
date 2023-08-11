import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import Welcome from "./pages/Welcome.tsx";
import ScrollToTop from "./hooks/ScrollToTop.tsx";

function App() {
  return (
    <>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Login-complete" element={<Welcome />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signup-complete" element={<ThankYou />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default App;
