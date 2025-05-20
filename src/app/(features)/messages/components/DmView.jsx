import React, { useState, useEffect, useRef } from "react";

const DMView = ({ room, onSendMessage, onLeaveChat, onDeleteChat }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSettingOn, setIsSettingOn] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [room.messages.length]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    onSendMessage(room.id, inputValue);
    setInputValue("");
  };

  const toggleSetting = () => setIsSettingOn((prev) => !prev);

  const handleDeleteClick = () => {
    if (window.confirm("정말로 이 대화를 삭제하시겠습니까?")) {
      onDeleteChat(room.id);
    }
  };

  const messages = room.messages || [];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isSettingOn ? "72% 28%" : "100%",
        height: `${viewportHeight}px`,
        width: "100%",
        overflow: "hidden",
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      {/* 채팅창 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          borderRight: isSettingOn ? "1px solid #ccc" : "none",
          overflow: "hidden",
        }}
      >
        {/* 헤더 */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 20px",
            borderBottom: "1px solid #ccc",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src={room.user.avatar || "https://via.placeholder.com/40"}
              alt="profile"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                {room.user.username}
              </div>
              <div style={{ fontSize: 12, color: "#888" }}>온라인</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={onLeaveChat}
              style={{
                background: "none",
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "6px 12px",
                cursor: "pointer",
                color: "#888",
              }}
            >
              나가기
            </button>
            <button
              onClick={toggleSetting}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
              }}
            >
              <img
                src={
                  isSettingOn
                    ? "/images/messages/messages_04.png"
                    : "/images/messages/messages_03.png"
                }
                alt={isSettingOn ? "설정 ON" : "설정 OFF"}
                style={{ width: 30, height: 30 }}
              />
            </button>
          </div>
        </div>

        {/* 메시지 영역 */}
        <div
          ref={messagesContainerRef}
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column-reverse",
            overflowY: "auto",
            padding: 12,
            backgroundColor: "#f9f9f9",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {messages.length === 0 ? (
              <p style={{ color: "#888" }}>메시지가 없습니다.</p>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    textAlign: msg.sender === "me" ? "right" : "left",
                    marginTop: 8,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor:
                        msg.sender === "me" ? "#3399ff" : "#eee",
                      color: msg.sender === "me" ? "white" : "black",
                      padding: "8px 12px",
                      borderRadius: 20,
                      maxWidth: "70%",
                      wordBreak: "break-word",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* 입력창 */}
        <div
          style={{
            flexShrink: 0,
            padding: "12px 20px",
            backgroundColor: "#fff",
          }}
        >
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: 20,
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      {/* 설정 패널 */}
      {isSettingOn && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "#fff",
            borderLeft: "1px solid #ddd",
          }}
        >
          <div style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
            <h2 style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "20px" }}>
              상세 정보
            </h2>

            {/* 알림 해제 스위치 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "18px" }}>🔔</span>
                <span style={{ fontSize: "14px" }}>메시지 알림 해제</span>
              </div>
              <label
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: 40,
                  height: 22,
                }}
              >
                <input
                  type="checkbox"
                  checked={isMuted}
                  onChange={() => setIsMuted((prev) => !prev)}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: isMuted ? "#4b4b4b" : "#ccc",
                    transition: ".4s",
                    borderRadius: 9999,
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    height: 16,
                    width: 16,
                    left: isMuted ? "22px" : "4px",
                    top: "3px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    transition: ".4s",
                  }}
                />
              </label>
            </div>

            {/* 일반 폴더 이동 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "14px" }}>일반 폴더로 이동</span>
              <button
                style={{
                  backgroundColor: "#eee",
                  border: "none",
                  borderRadius: 8,
                  padding: "4px 12px",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                이동
              </button>
            </div>
          </div>

          {/* 멤버 정보 */}
          <div style={{ padding: "20px" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "12px" }}>
              멤버
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img
                src={room.user.avatar || "https://via.placeholder.com/30"}
                alt="profile"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <span style={{ fontSize: "14px" }}>{room.user.username}</span>
            </div>
          </div>

          {/* 하단 메뉴: 신고 / 차단 / 삭제 */}
          <div
            style={{
              marginTop: "auto",
              padding: "16px 20px",
              borderTop: "1px solid #ddd",
              backgroundColor: "#fafafa",
              display: "grid",
              rowGap: "12px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ff3b30",
                fontWeight: "bold",
                fontSize: "14px",
                textAlign: "left",
                cursor: "pointer",
              }}
              onClick={() => alert("신고 기능은 아직 구현되지 않았습니다.")}
            >
              신고
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ff3b30",
                fontWeight: "bold",
                fontSize: "14px",
                textAlign: "left",
                cursor: "pointer",
              }}
              onClick={() => alert("차단 기능은 아직 구현되지 않았습니다.")}
            >
              차단
            </button>
            <button
              onClick={handleDeleteClick}
              style={{
                background: "none",
                border: "none",
                color: "#ff3b30",
                fontWeight: "bold",
                fontSize: "14px",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              채팅 삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DMView;
