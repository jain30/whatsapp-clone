import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DataContext } from "../context/DataProvider";

export default function Sidebarchat({ newchatlist }) {
  const { currentchat, setCurrentchat } = useContext(DataContext);
  const [currentindex, setcurrentindex] = useState(false);

  const handleDropdown = (index) => {
    if (currentindex === -1) {
      setcurrentindex(index);
    } else if (currentindex !== index) {
      setcurrentindex(index);
    } else {
      setcurrentindex(-1);
    }
  };

  return (
    <div>
      {newchatlist &&
        newchatlist?.map((chat, index) => {
          return (
            <div key={index} className="sidebar_container">
              <div
                className="sidebar_chat"
                onClick={() => setCurrentchat(chat)}
              >
                <Avatar className="sidebar_avtar_icon" src={chat.pic} />
                <div className="sidebar_chat_info">
                  <h3>{chat.name} </h3>
                  <p>{chat.messages[chat.messages.length - 1].content}</p>
                  <span>{chat.messages[chat.messages.length - 1].time}</span>
                  <KeyboardArrowDownIcon
                    className="down_arrow"
                    onClick={() => handleDropdown(index)}
                  />
                </div>
              </div>
              <div
                className="dropdown_content"
                style={{ display: currentindex === index ? "block" : "none" }}
              >
                <div className="dropdown_item">Archive chat</div>
                <div className="dropdown_item">Delete chat</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
