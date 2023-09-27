import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import PostPage from "./pages/PostPage.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  // FIXME: Fix Protected Route access
  return (
    <>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Listings"
            element={<ProtectedRoute page={<PostPage />} />}
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signup-complete" element={<ThankYou />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default App;
