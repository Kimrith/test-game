import React from "react";
// Added Navigate to the import list below
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout";

import Home from "./components/page/home";
import Contact from "./components/page/contact";
import ChatBox from "./components/page/chatBox";
import Games from "./components/page/games";
import AboutUs from "./components/page/aboutUs";

import Profile from "./components/user/profile";
import Logout from "./components/user/logout";
import Setting from "./components/user/setting";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chat" element={<ChatBox />} />
        <Route path="game" element={<Games />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="logout" element={<Logout />} />
        <Route path="settings" element={<Setting />} />

        {/* This will now work perfectly because Navigate is imported */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
