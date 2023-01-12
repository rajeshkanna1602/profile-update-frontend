import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { RightSideBar } from "./components/RightSideBar";
import { ProfilePage } from "./components/ProfilePage";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
        <ProfilePage />
      </div>
    </div>
  );
}

export default App;
