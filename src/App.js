import { useContext } from "react";
import "./App.css";
// import React, { useContext, useState } from "react";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import { DataContext } from "./context/DataProvider";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { DataContext } from "./context/DataProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "./Components/Login"


function App() {
const {account} = useContext(DataContext)
  const Sidebar_and_chat = () => {
    return (
      <>
      <Sidebar/>
      <Chat/>
      </>
    )
  }

//  const clientId = "777885541443-spdhogpaav2i05qrg112jkdppj.apps.googleusercontent.com"


  return (
    <GoogleOAuthProvider clientId = "128325242898-kn4knbk0j82g7k9opg56i9uceh16o6g7.apps.googleusercontent.com">
    <div className="App">
      <div className="chat-container">
      { account ? <Sidebar_and_chat/> : <Login/>}
      </div>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
