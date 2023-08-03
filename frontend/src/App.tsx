import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
