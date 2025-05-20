import React, { useState } from "react";
import "./post-image-slider.css";
import "../post-modal.css";

const PostImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-left">
      <div className="image-slider">
        <div className="image-wrapper">
          {currentIndex !== 0 && (
            <button
              className="slide-btn prev"
              onClick={goPrev}
              aria-label="이전 이미지"
            >
              ‹
            </button>
          )}

          <img
            src={images[currentIndex]}
            alt={`게시글 이미지 ${currentIndex + 1}`}
            className="modal-image"
          />

          <button
            className="slide-btn next"
            onClick={goNext}
            aria-label="다음 이미지"
          >
            ›
          </button>

          <div className="slide-indicator">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={idx === currentIndex ? "active" : ""}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`${idx + 1}번째 이미지`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setCurrentIndex(idx);
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostImageSlider;
