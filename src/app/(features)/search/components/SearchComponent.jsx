"use client";

import { useState, useRef, useEffect } from "react";
import "./search-component.css";

export default function SearchComponent({ onClose }) {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const profiles = [
    {
      img: "/images/search/profile1.png",
      userName: "qwerty",
      fullName: "qwerty",
    },
    {
      img: "/images/search/profile2.png",
      userName: "bbang_ok_luv",
      fullName: "빵빵이와 옥지의 럽스타그램👩‍❤️‍💋‍👨",
    },
    {
      img: "/images/search/profile3.png",
      userName: "goyounjung",
      fullName: "고윤정",
    },
    {
      img: "/images/search/profile4.png",
      userName: "bbang_2",
      fullName: "빵빵이",
    },
    {
      img: "/images/search/profile5.png",
      userName: "okz",
      fullName: "옥찌",
    },
    {
      img: "/images/search/profile6.png",
      userName: "5kjinae",
      fullName: "옥지네",
    },
    {
      img: "/images/search/profile7.png",
      userName: "travel.dreamer",
      fullName: "여행하는 꿈꾸는 자",
    },
    {
      img: "/images/search/profile8.png",
      userName: "hohohohoho",
      fullName: "예술혼",
    },
    {
      img: "/images/search/profile9.png",
      userName: "nightowl.creative",
      fullName: "밤올빼미",
    },
    {
      img: "/images/search/profile10.png",
      userName: "pixel.perfect",
      fullName: "픽셀 마스터",
    },
  ];

  const handleChange = (e) => setQuery(e.target.value);

  const handleProfileClick = (profile) => {
    if (!history.some((p) => p.userName === profile.userName)) {
      setHistory([profile, ...history]);
    }
  };

  const filteredProfiles = profiles.filter(
    ({ userName, fullName }) =>
      query &&
      (userName.toLowerCase().includes(query.toLowerCase()) ||
        fullName.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      {/* ✖ 닫기 버튼 */}
      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 1100,
          border: "none",
          background: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>

      {/* ✅ 검색 슬라이드 */}
      <div
        className="main-box"
        style={{
          position: "fixed",
          top: 0,
          left: 244,
          width: 400,
          height: "100vh",
          backgroundColor: "#fff",
          zIndex: 1000,
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
          overflowY: "auto",
          pointerEvents: "auto",
          margin: 0,
          paddingTop: 0,
        }}
      >
        <div className="search-box" style={{ paddingTop: "20px" }}>
          <h2 className="search-title">검색</h2>
          <div className="search-bar">
            {!isFocused && query === "" && (
              <img
                src="/images/search/search_icon.png"
                alt="검색 아이콘"
                className="search-icon"
                width={14}
                height={14}
                draggable={false}
              />
            )}
            <input
              type="text"
              placeholder="검색"
              value={query}
              onChange={handleChange}
              className="search-input"
              style={{
                paddingLeft: !isFocused && query === "" ? "36px" : "16px",
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              ref={inputRef}
            />
            {isFocused && (
              <button
                className="clear-button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setQuery("");
                  inputRef.current?.blur();
                }}
              >
                <img
                  src="/images/search/clear_icon.png"
                  alt="clear"
                  width={15}
                  height={15}
                  draggable={false}
                />
              </button>
            )}
          </div>
          <hr />
        </div>

        <div className="search-list">
          {!query && (
            <div className="recent-search">
              <h4>최근 검색 항목</h4>
              {history.length > 0 && (
                <span onClick={() => setHistory([])}>모두 지우기</span>
              )}
            </div>
          )}
          {query ? (
            filteredProfiles.length > 0 ? (
              <div className="profile-box">
                {filteredProfiles.map((profile, idx) => (
                  <div
                    key={idx}
                    className="profile"
                    onClick={() => handleProfileClick(profile)}
                  >
                    <img
                      className="profile-img"
                      src={profile.img}
                      alt={`${profile.userName} 프로필사진`}
                    />
                    <div className="profile-info">
                      <div>
                        <span className="user-name">{profile.userName}</span>
                      </div>
                      <div>
                        <span className="full-name">{profile.fullName}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-history-box">
                <p className="no-history">검색 결과가 없습니다.</p>
              </div>
            )
          ) : history.length > 0 ? (
            <div className="profile-box">
              {history.map((profile, idx) => (
                <div
                  key={idx}
                  className="profile"
                  onClick={() => handleProfileClick(profile)}
                >
                  <img
                    className="profile-img"
                    src={profile.img}
                    alt={`${profile.userName} 프로필사진`}
                  />
                  <div className="profile-info">
                    <div>
                      <span className="user-name">{profile.userName}</span>
                    </div>
                    <div>
                      <span className="full-name">{profile.fullName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-history-box">
              <p className="no-history">최근 검색 항목이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
