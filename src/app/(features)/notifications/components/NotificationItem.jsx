"use client";
// components/NotificationItem.jsx
import { useState } from "react";
export default function NotificationItem({
  user1,
  user2,
  message,
  profile,
  preview,
  time,
  follow,
}) {
  const [isFollowing, setIsFollowing] = useState(follow);
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <div className="noti-item">
      <img src={profile} className="noti-profile" />
      <div className="noti-content">
        <span className="noti-username">{user1}</span>
        {user2 && (
          <>
            {" "}
            과 <span className="noti-username">{user2}</span>
          </>
        )}
        {message}
        <span
          className="noti-time"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {time}
        </span>
      </div>

      {preview && <img src={preview} className="noti-preview" />}
      {follow && (
        <button
          className={`noti-btn ${isFollowing ? "btn1" : "btn2"}`}
          style={{ marginRight: "20px" }}
          onClick={handleFollow}
        >
          {isFollowing ? "팔로우" : "팔로잉"}
        </button>
      )}
    </div>
  );
}
