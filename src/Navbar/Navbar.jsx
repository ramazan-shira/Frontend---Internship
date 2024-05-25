import { useState } from "react";
import Tab from "./Tab";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleNav = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "navbar open" : "navbar"}>
      <div className={active ? "navbar-btn open" : "navbar-btn"}>
        <div className="logo">Logo</div>
        <Tab active={active} />
      </div>
      <div className="menu-icon">
        <button className="nav-btn" onClick={handleNav}>
          <i className={active ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
