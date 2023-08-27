import React from "react";
import { useNavigate } from "react-router-dom";

import db from "./firebase";

import "./SidebarOption.css";
const SidebarOption = ({ Icon, title, id, addChannelOptions }) => {
  const navigate = useNavigate();
  const selectChannel = () => {
    if (id) {
      navigate(`/room/${id}`);
    } else {
      navigate(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Enter the room name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOptions ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          {" "}
          <span className="sidebarOption_hash">#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
