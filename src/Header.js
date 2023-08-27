import React from "react";
import "./Header.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@mui/material";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          classname="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeFilledIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search Place holder" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
