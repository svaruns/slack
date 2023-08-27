import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FiberManualRecord } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import {
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@mui/icons-material";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecord className="icons" />
            sayolla
          </h3>
        </div>
        <CreateIcon className="icon" />
      </div>

      <SidebarOption Icon={InsertCommentIcon} title={"Threads"} />
      <SidebarOption Icon={Inbox} title={"Mentions & reactions"} />
      <SidebarOption Icon={Drafts} title={"Saved items"} />
      <SidebarOption Icon={BookmarkBorder} title={"Channel browser"} />
      <SidebarOption Icon={PeopleAlt} title={"People & user Groups"} />
      <SidebarOption Icon={Apps} title={"Apps"} />
      <SidebarOption Icon={FileCopy} title={"File browser"} />
      <SidebarOption Icon={ExpandLess} title={"Show less"} />
      <hr />
      <SidebarOption Icon={ExpandMore} title={"Channels"} />
      <hr />
      <SidebarOption
        Icon={Add}
        title={"Add Channel"}
        addChannelOptions={true}
      />
      {channels.map((channel) => {
        return (
          <SidebarOption
            key={channel.id}
            id={channel.id}
            title={channel.name}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
