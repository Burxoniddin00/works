import React, { useState } from "react";
import "../css/tabs.css"
import addition from "../img/addition.png";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState('1');

  const tabs = [
    {
      id: 1,
      tabTitel: "Reklama",
      contebt: "Reklma qo'shish",
    },
    {
      id: 2,
      tabTitel: "So'rovnoma",
      contebt: "So'rovnoma",
    },
  ];

  const handelTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="container_Tabs">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handelTabClick}
          >
            {tab.tabTitel}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>{currentTab === `${tab.id}` &&
          <div className="tabs__item">
            <img className="tabs_img" src={addition}alt="addition" />
              <p>{tab.contebt}</p>
          </div>
           }</div>
        ))}
      </div>
    </div>
  );
}
