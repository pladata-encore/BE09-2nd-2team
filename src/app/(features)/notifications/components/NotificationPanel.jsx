"use client";

import "../style.css";
import FollowRequestPanel from "./FollowRequestPenel";
import FollowRequest from "./FollowRequeste";
import NotificationItem from "./NotificationItem";
import NotificationSection from "./NotificationSection";
import { useState } from "react";

export default function NotificationPanel({ isOpen, onClose }) {
  const [panel, setPanel] = useState("main");

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "244px", // NavBar 옆
        width: "400px",
        height: "100vh",
        zIndex: 1000,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        backgroundColor: "white",
        overflow: "hidden", // 넘침 방지
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* 알림 콘텐츠 */}
      <div
        className="container"
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          position: "relative", // absolute 슬라이드 기준
        }}
      >
        <h2 style={{ marginBottom: "12px", padding: "10px 23px" }}>알림</h2>

        <FollowRequest
          user="AkiYama"
          count={4}
          profile="/images/noti/profile_10.jpg"
          onClick={() => setPanel("followRequest")}
        />

        <div className="divider"></div>

        <NotificationSection title="이번 달">
          <NotificationItem
            user1="maestro_guy"
            user2="xxxIDragon"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/search/profile9.png"
            preview="/images/noti/story_1.jpg"
            time="1일"
          />
          <NotificationItem
            user1="GaMyunRider"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/search/profile7.png"
            preview="/images/noti/story_1.jpg"
            time="3일"
          />
        </NotificationSection>

        <div className="divider"></div>

        <NotificationSection title="이전 활동">
          <NotificationItem
            user1="Mr.s Simple"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/search/profile3.png"
            preview="/images/noti/story_5.jpeg"
            time="1주"
          />
          <NotificationItem
            user1="Digimon"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/search/profile4.png"
            preview="/images/noti/story_6.jpeg"
            time="2주"
          />
          <NotificationItem
            user1="PocketMon"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/search/profile6.png"
            preview="/images/noti/story_4.jpeg"
            time="3주"
          />
          <NotificationItem
            user1="Goyunjeong"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/search/profile3.png"
            preview="/images/noti/story_6.jpeg"
            time="4주"
          />
          <NotificationItem
            user1="Mr.s Sexyguy"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/search/profile5.png"
            preview="/images/search/profile8.png"
            time="2주"
          />
        </NotificationSection>
      </div>

      {/* FollowRequestPanel: 알림 위로 덮는 슬라이드 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1001,
          backgroundColor: "white",
          transform:
            panel === "followRequest" ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <FollowRequestPanel onBack={() => setPanel("main")} />
      </div>
    </div>
  );
}
