import React from "react";

import "./sidebar.css";

import bars from "../icons/bars.png";
import contact from "../icons/contact.png";
import book from "../icons/book.png";
import bookmark from "../icons/bookmark.png";
import whatsapp from "../icons/whatsapp.png";
import up from "../icons/up.png";
import round from "../icons/round.png";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_main">
        <div className="sidebar__main_icon">
          <img src={bars} alt="1" />
        </div>
        <div className="sidebar__icon">
      
          <img src={contact} alt="1" />
          <img src={up} alt="1" />
          <img src={round} alt="1" />
          <img src={book} alt="1" />
          <img src={bookmark} alt="1" />
          <img src={whatsapp} alt="1" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
