import React from "react";
import { GrGrid } from "react-icons/gr";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { LuSquareUser } from "react-icons/lu";
import "./profile-taps.css";

const ProfileTabs = ({ activeTab, setActiveTab }) => (
  <div className="profile-tabs">
    <div className="tap-item-wrapper">
      <div
        className={`tab-item ${activeTab === "posts" ? "active" : ""}`}
        onClick={() => setActiveTab("posts")}
      >
        <GrGrid />
        <span>게시물</span>
      </div>

      <div
        className={`tab-item ${activeTab === "reels" ? "active" : ""}`}
        onClick={() => setActiveTab("reels")}
      >
        <BiMoviePlay />
        <span>릴스</span>
      </div>

      <div
        className={`tab-item ${activeTab === "saved" ? "active" : ""}`}
        onClick={() => setActiveTab("saved")}
      >
        <FaRegBookmark />
        <span>저장됨</span>
      </div>

      <div
        className={`tab-item ${activeTab === "tagged" ? "active" : ""}`}
        onClick={() => setActiveTab("tagged")}
      >
        <LuSquareUser />
        <span>태그됨</span>
      </div>
    </div>
  </div>
);

export default ProfileTabs;
