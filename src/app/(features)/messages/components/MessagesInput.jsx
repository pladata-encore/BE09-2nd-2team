import React, { useState } from "react";

const users = [
  {
    id: 1,
    username: "홍길동",
    profileImage: "/images/messages/messages_02.png",
  },
  {
    id: 2,
    username: "유관순",
    profileImage: "/images/messages/messages_02.png",
  },
  {
    id: 3,
    username: "손흥민",
    profileImage: "/images/messages/messages_07.jpg",
  },
  {
    id: 4,
    username: "이강인",
    profileImage: "/images/messages/messages_08.jpg",
  },
  {
    id: 5,
    username: "박지성",
    profileImage: "/images/messages/messages_06.jpg",
  },
  {
    id: 6,
    username: "안정환",
    profileImage: "/images/messages/messages_02.png",
  },
  {
    id: 7,
    username: "차은우",
    profileImage: "/images/messages/messages_09.jpg",
  },
  { id: 8, username: "blueThings", profileImage: "images/search/profile2.png" },
  // 더 추가 가능
];

function UserItem({ user, selected, onSelect }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        cursor: "pointer",
        backgroundColor: selected ? "#e0f2ff" : "transparent",
      }}
      onClick={() => onSelect(user.id)}
    >
      <img
        src={user.profileImage}
        alt={user.username}
        style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 12 }}
      />
      <span>{user.username}</span>
      <input
        type="radio"
        checked={selected}
        readOnly
        style={{ marginLeft: "auto" }}
      />
    </div>
  );
}

export default function NewMessageModal({ onClose, onStartChat }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        width: 500, // ✅ 가로 넓게
        backgroundColor: "white",
        borderRadius: 8,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: 16,
        position: "relative",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: 12 }}>새로운 메시지</h3>

      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          border: "none",
          background: "none",
          fontSize: 20,
          cursor: "pointer",
        }}
      >
        &times;
      </button>

      <div style={{ marginBottom: 16 }}>
        <label>
          <strong>받는 사람: </strong>
          <input
            type="text"
            placeholder="검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 8px",
              marginTop: 4,
              boxSizing: "border-box",
            }}
          />
        </label>
      </div>

      <div style={{ fontWeight: "bold", marginBottom: 8 }}>추천</div>

      <div
        style={{
          maxHeight: 240, // ✅ 약 4명 높이
          overflowY: "auto",
          borderTop: "1px solid #ddd",
          borderBottom: "1px solid #ddd",
          marginBottom: 12,
        }}
      >
        {filteredUsers.length === 0 ? (
          <div style={{ padding: 12, color: "#888" }}>사용자가 없습니다.</div>
        ) : (
          filteredUsers.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              selected={selectedUserId === user.id}
              onSelect={setSelectedUserId}
            />
          ))
        )}
      </div>

      <button
        disabled={!selectedUserId}
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: selectedUserId ? "#3399ff" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: selectedUserId ? "pointer" : "not-allowed",
          fontWeight: "bold",
        }}
        onClick={() => {
          const selectedUser = users.find((user) => user.id === selectedUserId);
          if (selectedUser && typeof onStartChat === "function") {
            onStartChat(selectedUser);
          }
        }}
      >
        채팅
      </button>
    </div>
  );
}
