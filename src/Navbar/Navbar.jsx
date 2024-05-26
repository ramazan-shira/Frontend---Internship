import { useEffect, useState } from "react";
import Tab from "./Tab";
import "./navbar.css";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleNav = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      window.onscroll = () => {
        setActive(false);
      };
    }
  }, [active]);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <button className="nav-btn" onClick={handleNav}>
        <i className={active ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>
      <nav className="nav-tabs">
        <Tab active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
