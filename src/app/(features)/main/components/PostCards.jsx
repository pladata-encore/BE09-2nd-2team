"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHeart, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import MoreOptionsModal from "./MoreOptionsModal";

const PostCard = ({ username, profileImgUrl, imgUrl, content }) => {
  const [commentCount, setCommentCount] = useState(null);
  const [likeCount, setLikeCount] = useState(null);
  const [liked, setLiked] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCommentCount(Math.floor(Math.random() * 1000) + 1);
    setLikeCount(Math.floor(Math.random() * 10000) + 1);
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 250);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() === "") return;
    console.log("댓글 작성됨:", commentText);
    setCommentText("");
  };

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid #dbdbdb",
          backgroundColor: "#fff",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        {/* 1. 상단 */}
        <div
          style={{
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={profileImgUrl}
              alt={`${username}의 프로필`}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div style={{ fontWeight: "bold" }}>{username}</div>
          </div>

          {/* ⋮ 더보기 버튼 */}
          <div
            onClick={() => setShowModal(true)}
            style={{
              width: "24px",
              height: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <circle cx="6" cy="12" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="18" cy="12" r="1.5" />
            </svg>
          </div>
        </div>

        {/* 2. 이미지 */}
        <img
          src={imgUrl}
          alt="게시물"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />

        {/* 3. 액션 버튼 */}
        <div style={{ padding: "12px" }}>
          <div style={{ display: "flex", gap: "14px", marginBottom: "4px" }}>
            <button
              onClick={handleLike}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                opacity: 1,
                transition: "opacity 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            >
              {liked ? (
                <FaHeart
                  color="red"
                  size={20}
                  className={isPopping ? "pop-heart" : ""}
                />
              ) : (
                <FaRegHeart
                  size={20}
                  className={isPopping ? "pop-heart" : ""}
                />
              )}
            </button>

            <Link href="/posts" style={{ display: "inline-flex" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  opacity: 1,
                  transition: "opacity 0.2s ease-in-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
              >
                <FaRegComment size={20} />
              </button>
            </Link>

            <button
              onClick={() => console.log("공유 클릭")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                opacity: 1,
                transition: "opacity 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            >
              <LuSend size={20} />
            </button>
          </div>

          {/* 좋아요 수 */}
          {likeCount !== null && (
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              좋아요 {likeCount + (liked ? 1 : 0)}개
            </div>
          )}

          {/* 본문 */}
          <div>
            <span style={{ fontWeight: "bold" }}>{username}</span> {content}
          </div>

          {/* 댓글 n개 보기 */}
          {commentCount !== null && (
            <Link href="/posts" style={{ textDecoration: "none" }}>
              <div
                style={{
                  color: "gray",
                  marginTop: "6px",
                  cursor: "pointer",
                }}
              >
                댓글 {commentCount}개 모두 보기
              </div>
            </Link>
          )}

          {/* 댓글 입력창 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #ddd",
              paddingTop: "12px",
              marginTop: "8px",
            }}
          >
            <input
              type="text"
              placeholder="댓글 달기..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCommentSubmit();
              }}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "14px",
              }}
            />

            {commentText.trim() && (
              <button
                onClick={handleCommentSubmit}
                style={{
                  border: "none",
                  background: "none",
                  color: "#0095f6",
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                  marginLeft: "8px",
                }}
              >
                게시
              </button>
            )}
          </div>
        </div>
      </div>

      {showModal && <MoreOptionsModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default PostCard;
