import React from "react";
import me from "../img/me.png";
import right from "../img/right.png";
import addition from "../img/addition.png";
import "../css/main.css";
import Tabs from "./Tabs";
import Tabs2 from "./Tabs2";
export default function Madal() {
  return (
    <div className="madal__div">
      <div className="madal__ucsers">
        <img className="madal__ima" src={me} alt="me" />
        <div>
          <h1 className="madal_name">Eshonov Fakhriyor</h1>
          <p className="madal__text">Google Company</p>
        </div>
        <img className="madal__right" src={right} alt="right" />
      </div>
      <div className="madal__price__div">
        <div>
          <p className="madal__text">Sizning Xisobingiz</p>
          <h1 className="malal__price">10 000 000 uzs</h1>
        </div>
        <button className="madal__btn">
          <img className="madal__add" src={addition} alt="addition" />
        </button>
      </div>
      <Tabs/>
<Tabs2/>
    </div>
  );
}
