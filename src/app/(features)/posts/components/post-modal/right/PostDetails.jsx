import React, { useState } from "react";

import "./post-details.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { AiOutlineSmile } from "react-icons/ai";

const PostDetails = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked || false);
  const [animate, setAnimate] = useState(false);
  const [saved, setSaved] = useState(post.isSaved || false);
  const [showComments, setShowComments] = useState(true);
  const commentCount = post.comments?.length || 0;

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300); // 애니메이션 지속 시간만큼 기다림
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="modal-right post-details-grid">
      {/* 첫 번째 행: 아바타 + 이름 */}
      <div className="modal-header">
        <img src={post.userAvatar} alt="프로필" className="avatar" />
        <span className="username">{post.username}</span>
        {/* <FollowButton /> */}
      </div>

      <div className="scroll-area">
        {/* 두 번째 행: 설명 */}
        <div className="modal-description">
          <img src={post.userAvatar} alt="프로필" className="content-avatar" />
          <div className="text-group">
            <span className="content-username">{post.username}</span>
            <span className="content-text">{post.content}</span>
          </div>
        </div>

        <div></div>
        <div></div>

        {/* 댓글 영역은 여전히 따로 보여줌 */}
        <div className="modal-comments">
          {post.comments?.map((comment, index) => (
            <div key={index} className="comment">
              <img
                src={comment.img} // ✅ 각 댓글의 이미지 경로
                alt="프로필"
                className="content-avatar"
              />
              <div className="comment-group">
                <span className="comment-user">{comment.username}</span>
                <span>{comment.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 세 번째 행: 좋아요, 댓글, 스크랩 */}
      <div className="post-actions">
        <button
          className={`action-btn like-btn ${liked ? "liked" : ""} ${
            animate ? "animate" : ""
          }`}
          onClick={toggleLike}
          aria-label={liked ? "좋아요 취소" : "좋아요"}
        >
          {liked ? (
            <FaHeart className="heart-icon liked" />
          ) : (
            <FaRegHeart className="heart-icon" />
          )}
        </button>

        {/* <span className="like-count">{likeCount}</span> */}
        <button
          className="action-btn comment-btn"
          onClick={() => setShowComments(!showComments)}
          aria-label="댓글"
        >
          <FaRegComment />
        </button>
        <button className={`action-btn send-btn`}>
          <LuSend />
        </button>
        <button
          className={`action-btn save-btn ${saved ? "saved" : ""}`}
          onClick={toggleSave}
          aria-label={saved ? "스크랩 취소" : "스크랩"}
        >
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
      <div className="row4">
        <div className="liked-people">
          <strong>hemi.stree</strong>님 <strong>여러 명이 좋아합니다</strong>
        </div>

        <div className="post-date">2024년 7월 31일</div>
      </div>

      <div className="add-comment">
        <button className="action-btn comment-btn">
          <AiOutlineSmile />
        </button>
        <input
          type="text"
          className="comment-input"
          placeholder="댓글달기..."
        />
        <button className="send-comment">게시</button>
      </div>
    </div>
  );
};

export default PostDetails;
