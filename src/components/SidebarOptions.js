import React from "react";
import "../styles/SidebarOptions.css";

function SidebarOption({ option, Icon }) {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOptions-icons" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;
