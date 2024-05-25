import { useState } from "react";
import { navTabs } from "./navtabs";
import "./navbar.css";

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState(navTabs[0].id);

  const [tabs, setTabs] = useState(navTabs);

  const handleTab = (id) => {
    if (selectedTab !== id) {
      setSelectedTab(id);
    }
  };
  return (
    <div className="nav-tabs">
      {tabs.map((tab) => (
        <a
          href={`#${tab.id}`}
          onClick={() => handleTab(tab.id)}
          className={tab.id === selectedTab ? "active-tab" : ""}
        >
          {tab.title}
        </a>
      ))}
      <div className="menu-icon">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Tab;
