"use client";
import { useState } from "react";
export default function FollowItem({
  user,
  profile,
  name = "",
  recomend,
  btmmessage,
  follow,
}) {
  const [isFollow, setIsFollow] = useState(follow);
  const handleFollow = () => {
    setIsFollow(!isFollow);
  };
  return (
    <div className="noti-item">
      <img src={profile} className="noti-profile" />
      <div className="noti-content">
        <span className="noti-uesrname" style={{ fontWeight: "800" }}>
          {user}
        </span>
        <div className="noti-time">{name}</div>
        {btmmessage && <div className="noti-time">{btmmessage}</div>}
      </div>
      {recomend === undefined ? (
        <>
          <button className="follow-btn btn1">확인</button>
          <button className="follow-btn btn2">삭제</button>
        </>
      ) : (
        <button
          className={`noti-btn ${isFollow ? "btn1" : "btn2"}`}
          style={{ marginRight: "20px" }}
          onClick={handleFollow}
        >
          {isFollow ? "팔로우" : "팔로잉"}
        </button>
      )}
    </div>
  );
}
