import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { LuSend } from "react-icons/lu";

export default function StoryFooter({ user }) {
  const [liked, setLiked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const saveInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };
  const handleToggle = () => {
    setLiked((prev) => !prev);
  };
  const activeButton = () => {
    alert(`${inputValue} 입력`);
  };
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      activeButton();
    }
  };
  return (
    <div className="story-footer-container">
      <input
        className="story-footer-input"
        type="text"
        placeholder={`${user}님에게 답장하기 ...`}
        value={inputValue}
        onChange={(e) => saveInputValue(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button
        className={`action-btn like-btn ${liked ? "liked" : ""}`}
        onClick={handleToggle}
      >
        {liked ? (
          <FaHeart className="heart-icon liked" />
        ) : (
          <FaRegHeart className="heart-icon" />
        )}
      </button>
      <LuSend
        style={{ width: "22PX", height: "22PX" }}
        onClick={activeButton}
      />
    </div>
  );
}
