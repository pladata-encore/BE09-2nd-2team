"use client";

import React, { useState } from "react";
import ProfilePage from "./components/profile-page/ProfilePage";
import Navbar from "../main/components/NavBar";
import "./page.css";

export default function PostModalTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => setIsModalOpen(false);

  return (
    <div className="profile-wrapper">
      <div className="left-profile">
        <Navbar />
      </div>
      <div className="right-profile" style={{ padding: "50px" }}>
        <ProfilePage />
      </div>
    </div>
  );
}
