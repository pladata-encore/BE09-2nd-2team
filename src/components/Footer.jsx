"use client";

import { useState } from "react";

export default function Footer() {
  const links = [
    "Meta",
    "소개",
    "블로그",
    "채용 정보",
    "도움말",
    "API",
    "개인정보처리방침",
    "약관",
    "위치",
    "Instagram Lite",
    "Threads",
    "연락처 업로드 & 비사용자",
    "Meta Verified",
  ];

  const languages = [
    "한국어",
    "English",
    "日本語",
    "Español",
    "Français",
    "Deutsch",
    "中文",
    "Português",
  ];
  const [showLangs, setShowLangs] = useState(false);
  const [selectedLang, setSelectedLang] = useState("한국어");

  const toggleLangs = () => setShowLangs(!showLangs);
  const selectLang = (lang) => {
    setSelectedLang(lang);
    setShowLangs(false);
  };

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "40px 20px",
        fontSize: "12px",
        color: "#737373",
        lineHeight: "1.5",
        // marginTop: "40px",
        // height: "135px",
        position: "relative",
      }}
    >
      {/* 링크 리스트 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          maxWidth: "1000px",
          textAlign: "center",
        }}
      >
        {links.map((text, index) => (
          <a
            key={index}
            href="#"
            style={{
              textDecoration: "none",
              color: "#737373",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </a>
        ))}
      </div>

      {/* 언어 선택 & 카피라이트 */}
      <div
        style={{ marginTop: "20px", textAlign: "center", position: "relative" }}
      >
        <span
          onClick={toggleLangs}
          style={{
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          {selectedLang}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
        <span>© 2025 Instagram from Meta</span>

        {/* 언어 드롭다운 */}
        {showLangs && (
          <div
            style={{
              position: "absolute",
              bottom: "25px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#ffffff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
              padding: "8px",
              minWidth: "120px",
            }}
          >
            {languages.map((lang, index) => (
              <div
                key={index}
                onClick={() => selectLang(lang)}
                style={{
                  padding: "6px 12px",
                  cursor: "pointer",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  color: "#333",
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
