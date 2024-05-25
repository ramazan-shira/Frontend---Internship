import { useRef, useState } from "react";
import { navTabs } from "./navtabs";
import "./navbar.css";

const Tab = (props) => {
  const { active } = props;

  const [selectedTab, setSelectedTab] = useState(navTabs[0].id);

  const [tabs, setTabs] = useState(navTabs);

  const handleTab = (id) => {
    if (selectedTab !== id) {
      setSelectedTab(id);
    }
  };

  return (
    <div className={active ? "nav-bar open" : "nav-bar"}>
      <div className={active ? "nav-tabs open" : "nav-tabs"}>
        {tabs.map((tab) => (
          <a
            href={`#${tab.id}`}
            onClick={() => handleTab(tab.id)}
            className={tab.id === selectedTab ? "active-tab" : ""}
          >
            {tab.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tab;
