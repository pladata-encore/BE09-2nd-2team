import React from "react";
import "./post-grid.css";

const PostGrid = ({ posts, onImageClick }) => (
  <div className="post-grid">
    {posts.map((post, index) => (
      <img
        key={index}
        src={post.imageUrl}
        alt={`게시물 ${index + 1}`}
        onClick={() => onImageClick(post)} // 클릭 시 해당 포스트 전달
        style={{ cursor: "pointer" }} // 마우스 오버 시 손가락 모양
      />
    ))}
  </div>
);

export default PostGrid;
