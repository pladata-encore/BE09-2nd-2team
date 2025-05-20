import { useState } from "react";

const RecommendedUser = ({ username, description, img }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
  };

  const getColor = () => {
    if (isFollowing) {
      return isHovering ? "#a1a1a1" : "rgb(38, 38, 38)"; // 팔로잉 상태
    } else {
      return isHovering ? "rgb(0, 55, 107)" : "rgb(0, 149, 246)"; // 팔로우 상태
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <img
        src={img}
        alt={`${username} 프로필`}
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
        }}
      />
      <div style={{ flex: 1, marginLeft: "12px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>{username}</div>
        <div style={{ fontSize: "12px", color: "gray" }}>{description}</div>
      </div>
      <span
        onClick={handleFollowClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          cursor: "pointer",
          whiteSpace: "nowrap",
          color: getColor(),
          transition: "color 0.1s ease",
        }}
      >
        {isFollowing ? "팔로잉" : "팔로우"}
      </span>
    </div>
  );
};

export default RecommendedUser;
