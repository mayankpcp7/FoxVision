import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Offer from "./pages/Offer";
import Footer from "./components/common/Footer";
import Hero from "./components/common/Hero";
import Navbar from "./components/common/Navbar";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <>
      <div className="bg-darkpurple pt-5 pb-1">
        <Navbar />
        <Hero />
      </div>{" "}
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>{" "}
        <Route path="/about" element={<AboutUs />}>
          {" "}
        </Route>{" "}
        <Route path="/contact" element={<ContactUs />}>
          {" "}
        </Route>{" "}
        <Route path="/portfolio" element={<Portfolio />}>
          {" "}
        </Route>{" "}
        <Route path="/offer" element={<Offer />}>
          {" "}
        </Route>{" "}
      </Routes>{" "}
      <div className="px-3 bg-darkblue">
        <Footer />
      </div>{" "}
      <BackToTop />
    </>
  );
}

export default App;
