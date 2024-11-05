import { createContext, useState } from "react";
import React from "react";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
  const [currentchat, setCurrentchat] = useState({});
  
  const [reveal, setReveal] = useState(false);

  const [account, setAccount] = useState(null);


  const [chatlist, setChatlist] = useState([
    {
      name: "Pooja",
      archived: false,
      pic: "https://i.pinimg.com/736x/0d/d8/8c/0dd88c3f982afea927c62a58b2628d69.jpg",
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
      archived: false,
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
    <DataContext.Provider
      value={{ chatlist, setChatlist, currentchat, setCurrentchat,reveal, setReveal, account, setAccount }}
    >
      {children}
    </DataContext.Provider>
  );
}
