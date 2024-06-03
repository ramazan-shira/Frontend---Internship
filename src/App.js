import logo from "./logo.svg";
import "./App.css";
import Gallery from "./Gallery/Gallery";
import Navbar from "./Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
