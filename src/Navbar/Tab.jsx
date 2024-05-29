import { useEffect, useRef, useState } from "react";
import { navTabs } from "./navtabs";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Tab = (props) => {
  const { active } = props;

  const [selectedTab, setSelectedTab] = useState();

  const [tabs, setTabs] = useState(navTabs);

  const handleTab = (id) => {
    if (selectedTab !== id) {
      setSelectedTab(id);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      updateNav();
    };

    function updateNav() {
      const currentSection = [
        ...document.querySelectorAll(".section:not([id=''])"),
      ].find((e) => e.getBoundingClientRect().top >= 0);

      if (currentSection) {
        [
          ...document.querySelectorAll(
            `a:not([href='/#${currentSection.id}'])`
          ),
        ].forEach((a) => a.classList.remove("active-tab"));

        document
          .querySelector(`a[href='/#${currentSection.id}']`)
          ?.classList.add("active-tab");
      }
    }
  }, []);

  return (
    <div className={active ? "tabs open" : "tabs"}>
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          to={`/#${tab.id}`}
          onClick={() => handleTab(tab.id)}
          className={tab.id === selectedTab ? "active-tab" : ""}
        >
          {tab.title}
        </Link>
      ))}
    </div>
  );
};

export default Tab;
