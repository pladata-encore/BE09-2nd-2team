"use client";

import React from "react";
import PostImageSlider from "./left/PostImageSlider";
import PostDetails from "./right/PostDetails";

const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  const images = post.images
    ? post.images
    : [`../../../images/feed/feed1_${post.id}.jpg`];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>
        ×
      </button>
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content" style={{ display: "flex" }}>
          <PostImageSlider images={images} />
          <PostDetails post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostModal;
