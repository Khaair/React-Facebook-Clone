import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./Components/Account";
import Friends from "./Components/Friends";
import Gaming from "./Components/Gaming";
import Groups from "./Components/Groups";
import Homepage from "./Components/Homepage";
import Marketplace from "./Components/Marketplace";
import Menu from "./Components/Menu";
import Messenger from "./Components/Messenger";
import Navbar from "./Components/Navbar";
import Notification from "./Components/Notification";
import Profile from "./Components/Profile";
import Saved from "./Components/Saved";
import Watch from "./Components/Watch";

function App() {
  return (
    <div>

     
      <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Messenger" element={<Messenger />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Saved" element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
