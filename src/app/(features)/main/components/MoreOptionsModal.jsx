"use client";

import React from "react";

const MoreOptionsModal = ({ onClose }) => {
  const options = [
    { text: "신고", color: "#ed4956" },
    { text: "팔로우 취소", color: "#ed4956" },
    { text: "즐겨찾기에 추가" },
    { text: "게시물로 이동" },
    { text: "공유 대상..." },
    { text: "링크 복사" },
    { text: "퍼가기" },
    { text: "이 계정 정보" },
    { text: "취소" },
  ];

  return (
    <>
      {/* 배경 어둡게 */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1000,
        }}
      />

      {/* 모달 */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          borderRadius: "12px",
          width: "400px",
          zIndex: 1001,
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        {options.map((item, index) => (
          <div
            key={index}
            onClick={onClose}
            style={{
              padding: "14px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: index <= 1 ? "bold" : "normal",
              color: item.color || "#000",
              borderBottom:
                index === options.length - 1
                  ? "none"
                  : "1px solid rgba(219, 219, 219, 1)",
              cursor: "pointer",
              backgroundColor: "#fff",
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreOptionsModal;
