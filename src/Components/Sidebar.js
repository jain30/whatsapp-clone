import React, { useState } from "react";
import "../styles/Sidebar.css";
import Sidebarchat from "./Sidebarchat";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Sidebar({ chatlist }) {
  let x = new Date().toLocaleTimeString();

  const [reveal, setReveal] = useState(false);

  const [searchvalue, setSearchvalue] = useState("");

  const handleChange = (e) => {
    setSearchvalue(e.target.value);
    console.log(e.target.value);
  };
  const handleRevel = () => {
    setReveal(!reveal);
    console.log(reveal);
  };
  // const handleArchived = () => {
  //   setReveal(!reveal);
  // };

  return (
    <div className="Sidebar">
      <div className="sidebar_header">
        <Avatar
          className="sidebar_avtar_icon"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <h5>Chats</h5>
        <BorderColorIcon className="sidebarIcon edit" />
        <MoreHorizIcon className="sidebarIcon more" />
      </div>

      <div className="sidebar_Search">
        <input
          placeholder="Search or Start a new Chat"
          value={searchvalue}
          onChange={handleChange}
        ></input>
        <SearchIcon />
      </div>

      <div className="sidebar_archived" onClick={handleRevel}>
        <BusinessCenterIcon className="archived" />
        Archived
        <div className="archived_number">2</div>
      </div>

      <div
        className="sidebar_archived_section"
        style={{
          marginLeft: reveal ? "0%" : "-500px",
          // opacity: reveal ? "1" : "0",
        }}
      >
        <div className="sidebar_archived_section_header">
          <ArrowBackIcon onClick={handleRevel} className="back" />
          <p>archived section</p>
        </div>
        <div className="sidebar_chat_list">
          <Sidebarchat chatlist={chatlist} />
        </div>
      </div>
      <div className="sidebar_chat_list">
        <Sidebarchat chatlist={chatlist} />
      </div>
    </div>
  );
}
