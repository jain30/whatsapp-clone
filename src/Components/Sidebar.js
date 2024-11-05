import React, { useContext, useState } from "react";
import "../styles/Sidebar.css";
import Sidebarchat from "./Sidebarchat";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DataContext } from "../context/DataProvider";

export default function Sidebar() {
  // let x = new Date().toLocaleTimeString();
  const {account ,chatlist } = useContext(DataContext);

  const [reveal, setReveal] = useState(false);

  const [searchvalue, setSearchvalue] = useState("");

  const [newchatlist, setNewchatlist] = useState(chatlist);

  const handleChange = (e) => {
    setSearchvalue(e.target.value);
    let newlist = chatlist.filter(
      (chat) =>
        chat.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    );
    setNewchatlist(newlist);
    // console.log(e.target.value);
    // console.log(newchatlist);
  };
  const handleRevel = () => {
    setReveal(!reveal);
    console.log(reveal);
  };
  // const handleArchived = () => {
  //   setReveal(!reveal);
  // };

  const getNoOfArchivedChats = () => {
    let number = 0;
    chatlist.map((chat, index) => {
      if (chat.archived === true) {
        number = number + 1;
      }
    });
    // console.log(archivedChats)
    return number;
  };
  return (
    <div className="Sidebar">
      <div className="sidebar_header">
        <Avatar
          className="sidebar_avtar_icon"
          src={account?.pic}
        />
        <p  className="sidebar_avtar_name">{account?.name}</p>
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
        <div className="archived_number">{getNoOfArchivedChats()}</div>
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
          <Sidebarchat newchatlist={newchatlist} reveal={reveal} />
        </div>
      </div>
      <div className="sidebar_chat_list">
        <Sidebarchat newchatlist={newchatlist} reveal={reveal} />
      </div>
    </div>
  );
}
