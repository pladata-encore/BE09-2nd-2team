"use client";

import { useState } from "react";

export default function MainStoryTop({ user, profile, time, other = "" }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const handleClickMute = () => {
    setIsMuted(!isMuted);
  };
  const handleClickPause = () => {
    setIsPaused(!isPaused);
  };
  return (
    <div className="story-top">
      <div className="story-user-info">
        <img src={profile} className="story-profile" />
        <span className="story-username">{user}</span>
        <span className="story-time">{time}</span>
      </div>
      <div className="story-icons">
        <img
          src={isMuted ? "/images/noti/mute.svg" : "/images/noti/unmute.svg"}
          onClick={handleClickMute}
          alt="mute toggle"
        />
        <img
          src={isPaused ? "/images/noti/pause.svg" : "/images/noti/unpause.svg"}
          onClick={handleClickPause}
          alt="pause toggle"
        />
        <img src="/images/noti/more.svg" />
      </div>
    </div>
  );
}
