import logo from "./logo.svg";
import "./App.css";
import Gallery from "./Gallery/Gallery";
import Navbar from "./Navbar/Navbar";
import Hero from "./Home/Hero/Hero";
import About from "./Home/About/About";
import Contact from "./Home/Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <About />
      <Contact />
      <Footer /> */}
      <Gallery />
    </>
  );
}

export default App;
