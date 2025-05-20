"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation"; // ✅ 추가
import "./page.css";
import NewMessageModal from "./components/MessagesInput";
import DMView from "./components/DmView";

const DMListPage = () => {
  const router = useRouter(); // ✅ 추가
  const [chatRooms, setChatRooms] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const wrapRef = useRef();

  const selectedRoom = chatRooms.find((r) => r.id === selectedRoomId);

  const handleStartChat = (user) => {
    const existing = chatRooms.find((r) => r.user.id === user.id);
    if (existing) {
      setSelectedRoomId(existing.id);
    } else {
      const newRoom = {
        id: Date.now(),
        user: {
          id: user.id,
          username: user.username,
          avatar: user.profileImage,
        },
        messages: [],
      };
      setChatRooms((prev) => [...prev, newRoom]);
      setSelectedRoomId(newRoom.id);
    }
    setModalOpen(false);
  };

  const handleSendMessage = (roomId, text) => {
    setChatRooms((prev) =>
      prev.map((r) =>
        r.id === roomId
          ? {
              ...r,
              messages: [...r.messages, { id: Date.now(), text, sender: "me" }],
            }
          : r
      )
    );
  };

  const handleLeaveChat = () => {
    setSelectedRoomId(null);
  };

  const handleDeleteChat = (roomId) => {
    setChatRooms((prev) => prev.filter((r) => r.id !== roomId));
    if (selectedRoom?.id === roomId) {
      setSelectedRoomId(null);
    }
  };

  return (
    <div className="wrap" ref={wrapRef}>
      {/* 왼쪽: DM 목록 */}
      <div className="dm-list">
        {/* 👉 메인으로 버튼 (라우팅 추가) */}
        <div style={{ padding: "0px 90px 0px", borderBottom: "1px solid #ddd" }}>
          <button
            onClick={() => router.push("/main/pages")} // ✅ 여기에 라우팅 적용
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src="/images/messages/messages_10.png"
              alt="메인으로"
              style={{ width: 180, height: 80 }}
            />
          </button>
        </div>

        {/* 메시지 타이틀 + 새 메시지 버튼 */}
        <div
          style={{
            marginTop: "8px",
            padding: "0 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ margin: 0 }}>메시지</h1>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src="/images/messages/messages_05.png"
              alt="새 메시지"
              style={{ width: 45, height: 35 }}
            />
          </button>
        </div>

        {/* DM 목록 */}
        {chatRooms.length === 0 ? (
          <div className="empty-list">
            <p>대화 목록이 없습니다.</p>
          </div>
        ) : (
          chatRooms.map((room) => (
            <div
              key={room.id}
              className="dm-item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 12px",
                borderBottom: "1px solid #eee",
              }}
            >
              <div
                onClick={() => setSelectedRoomId(room.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={room.user.avatar || "/images/profiles/default.png"}
                  alt="프로필"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: 10,
                  }}
                />
                <strong>{room.user.username}</strong>
              </div>
              <button onClick={() => handleDeleteChat(room.id)}>삭제</button>
            </div>
          ))
        )}
      </div>

      {/* 오른쪽: DM View or 시작 화면 */}
      <div className={`dm-view${selectedRoom ? " chat-mode" : ""}`}>
        {selectedRoom ? (
          <DMView
            room={selectedRoom}
            onSendMessage={handleSendMessage}
            onLeaveChat={handleLeaveChat}
            onDeleteChat={handleDeleteChat}
          />
        ) : (
          <div
            className="dm-start"
            style={{ textAlign: "center", marginTop: "100px" }}
          >
            <img
              src="/images/messages/messages_01.png"
              alt="Messenger Icon"
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
                marginBottom: 20,
              }}
            />
            <h2>내 메시지</h2>
            <p style={{ color: "#888", marginBottom: 24 }}>
              친구나 그룹에 비공개 사진과 메시지를 보내보세요.
            </p>
            <button
              className="primary-btn"
              onClick={() => setModalOpen(true)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#3399ff",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              메시지 보내기
            </button>
          </div>
        )}
      </div>

      {/* 모달 */}
      {modalOpen && (
        <div className="modal-backdrop">
          <NewMessageModal
            onClose={() => setModalOpen(false)}
            onStartChat={handleStartChat}
          />
        </div>
      )}
    </div>
  );
};

export default DMListPage;
