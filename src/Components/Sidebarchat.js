import { Avatar } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Sidebarchat({ chatlist }) {
  
  const [dropdown, setDropdown] = useState(false)
  
  const handleDropdown = ()=>{
    setDropdown(!dropdown)
  }
  console.log(chatlist);
  return (
    <div>

      {chatlist.map((user, index) => {
        return (
          <div key={index} className="sidebar_container">

            <a href={`/chat/${user.name}`} key={index}>
              <div className="sidebar_chat">
                <Avatar className="sidebar_avtar_icon" src={user.pic} />
                <div className="sidebar_chat_info">
                  <h3>{user.name} </h3>
                  <p>{user.messages[user.messages.length - 1].content}</p>
                  <span>{user.messages[user.messages.length - 1].time}</span>
                  <KeyboardArrowDownIcon className="down_arrow" onClick={handleDropdown}/>
                </div>
              </div>
            </a>
            <div className="dropdown_content" style={{display:dropdown ? "block" : "none"}}>
              <div href="#">Link 1</div>
              <div href="#">Link 2</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
