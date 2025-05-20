"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ 여기 추가
import storyUsers from "../data/UsersStory";

const StoryBar = ({ children }) => (
  <div
    style={{
      position: "relative",
      colorScheme: "light",
      height: "100px",
      backgroundColor: "white",
      marginBottom: "8px",
      fontSize: "14px",
      width: "630px",
      overflow: "hidden",
      display: "flex",
      boxSizing: "border-box",
    }}
  >
    {children}
  </div>
);

const StoryItem = ({ username, imgSrc, seen, onClick }) => (
  <div
    style={{
      width: "66px",
      flexShrink: 0,
      textAlign: "center",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <div
      style={{
        width: "66px",
        height: "66px",
        margin: "0 auto",
        borderRadius: "50%",
        background: seen
          ? "#dbdbdb"
          : "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
        padding: "2px",
        boxSizing: "border-box", // ✅ 핵심: 패딩 포함 크기 계산
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.7s ease-in-out", // ✅ 부드러운 전환 핵심
      }}
    >
      <img
        src={imgSrc}
        alt={username}
        style={{
          width: "99%",
          height: "99%",
          borderRadius: "50%",
          border: "2px solid white",
          boxSizing: "border-box", // ✅ 핵심: border 포함 크기 계산
          objectFit: "cover", // ✅ 이미지가 비율 무너지지 않게
        }}
      />
    </div>
    <div
      style={{
        fontSize: "12px",
        marginTop: "6px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {username}
    </div>
  </div>
);

const Stories = () => {
  const [seenStories, setSeenStories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;
  const router = useRouter(); // ✅ 추가

  const handleStoryClick = (username) => {
    if (!seenStories.includes(username)) {
      setSeenStories([...seenStories, username]);
    }
    console.log(`"${username}" 스토리 클릭됨`);
    router.push(`/stories/${username}`); // ✅ 페이지 이동
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, storyUsers.length - itemsPerPage)
    );
  };

  const visibleUsers = storyUsers.slice(startIndex, startIndex + itemsPerPage);

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    border: "none",
    padding: 0,
    margin: "0 8px",
    cursor: "pointer",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    transition: "background-color 0.15s ease-in-out",
  };

  return (
    <>
      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          style={{ ...arrowStyle, left: "8px", top: "37px" }} // 왼쪽 화살표
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="black"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
      )}

      <div
        style={{
          width: `${66 * itemsPerPage + 12 * (itemsPerPage - 1)}px`, // 정확한 스토리 바 너비
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            transform: `translateX(-${startIndex * (66 + 12)}px)`,
            transition: "transform 0.5s ease-in-out", // 촤르르 느낌
          }}
        >
          {storyUsers.map((user, idx) => (
            <StoryItem
              key={idx}
              {...user}
              seen={seenStories.includes(user.username)}
              onClick={() => handleStoryClick(user.username)}
            />
          ))}
        </div>
      </div>

      {startIndex + itemsPerPage < storyUsers.length && (
        <button
          onClick={handleNext}
          style={{ ...arrowStyle, right: "24px", top: "37px" }} // 오른쪽 화살표
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="black"
            viewBox="0 0 24 24"
            style={{ transform: "rotate(180deg)" }}
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default StoryBar;
export { Stories };
