import {createContext, useState } from "react";
import React from "react";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
  const [currentchat, setCurrentchat] = useState({})
  const [chatlist, setChatlist] = useState([
    {
      name: "Pooja",
      pic: "https://mui.com/static/images/avatar/2.jpg",
      messages: [
        {
          content: "last message from pooja",
          time: "4:40 PM",
          sent: true,
        },

        {
          content: "Hey, how are you?",
          time: "4:41 PM",
          sent: false,
        },
      ],
    },

    {
      name: "Neha",
      pic: "https://images.ctfassets.net/036u2q6q3phs/6UeY9z6oznXKuBNdyYWeCr/d70a33aad866e5b189ccc227ab845301/sh2_wave1.jpg?fm=webp&w=566&h=760&q=60",
      messages: [
        {
          content: "Last message from neha",
          time: "4:44 PM",
          sent: true,
        },

        {
          content: "Hey, how are you?",
          time: "4:41 PM",
          sent: false,
        },
      ],
    },
  ]);

  return (
    <DataContext.Provider value={{ chatlist, setChatlist,currentchat, setCurrentchat }}>
      {children}
    </DataContext.Provider>
  );
}
