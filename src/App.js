import "./App.css";
// import React, { useContext, useState } from "react";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { DataContext } from "./context/DataProvider";


function App() {
  return (
    <div className="App">
      <div className="chat-container">
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
