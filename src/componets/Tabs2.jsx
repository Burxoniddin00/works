import React, { useState } from "react";
import exit from "../img/exit.png";
import help from "../img/help.png";
import menu from "../img/menu.png";
import '../css/tabs2.css'
export default function Tabs2() {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitel: "Asosiy",
      imge: menu,
    },
    {
      id: 2,
      tabTitel: "Yordam",
      imge: help,
    },
    {
      id: 3,
      tabTitel: "Akkauntda chiqish",
      imge: exit,
    },
  ];

  const handelTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="container_Tabs2">
      <div className="tabs2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handelTabClick}
          >
            <img  className="tabs_img2" src={tab.imge} alt="img" />

            {tab.tabTitel}
          </button>
        ))}
      </div>
    </div>
  );
}
