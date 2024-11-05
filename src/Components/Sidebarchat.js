import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DataContext } from "../context/DataProvider";

export default function Sidebarchat({ newchatlist, reveal }) {
  const { chatlist, setChatlist, currentchat, setCurrentchat } =
    useContext(DataContext);
  const [currentindex, setcurrentindex] = useState(false);
console.log(newchatlist)
  const handleDropdown = (index, event) => {
    event.stopPropagation();

    if (currentindex === -1) {
      setcurrentindex(index);
    } else if (currentindex !== index) {
      setcurrentindex(index);
    } else {
      setcurrentindex(-1);
    }
  };

  const handleArchive = (index, event) => {
    // event.stopPropagation();

    let changedlist = chatlist.map((chat, chatindex) => {
      if (chatindex === index) {
        return { ...chat, archived: true };
      }
      return chat;
    });

    setChatlist(changedlist);
    console.log(changedlist);

  };

  const handleUnArchive  = (index, event) => {
    // event.stopPropagation();

    let changedlist = chatlist.map((chat, chatindex) => {
      if (chatindex === index) {
        return { ...chat, archived: false };
      }
      return chat;
    });
    setChatlist(changedlist);
    // console.log(changedlist);
  };


  return (
    <div>
      { chatlist &&
      newchatlist &&
        newchatlist?.map((chat, index) => {
          if (reveal === chat.archived)
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
                      onClick={(event) => handleDropdown(index,event)}
                    />
                  </div>
                </div>
                <div
                  className="dropdown_content"
                  style={{ display: currentindex === index ? "block" : "none" }}
                >

                  {reveal ? <div
                    className="dropdown_item"
                    onClick={(event) => handleUnArchive(index, event)}
                  >
                    Unarchive chat
                  </div> :   <div
                    className="dropdown_item"
                    onClick={(event) => handleArchive(index, event)}
                  >
                    Archive chat
                  </div>}
                

                  
                  <div className="dropdown_item">Delete chat</div>
                </div>
              </div>
            );
        })}
    </div>
  );
  }
