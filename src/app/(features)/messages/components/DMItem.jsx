const DMItem = ({ room, selected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        padding: 12,
        cursor: "pointer",
        backgroundColor: selected ? "#d0ebff" : "transparent",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center"
      }}
    >
      <img 
        src={room.user.profileImage} 
        alt={room.user.username} 
        style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 12 }} 
      />
      <div>
        <div style={{ fontWeight: "bold" }}>{room.user.username}</div>
        <div style={{ fontSize: 12, color: "#666" }}>
          {room.messages.length > 0 ? room.messages[room.messages.length-1].text : "새 대화"}
        </div>
      </div>
    </div>
  );
};

export default DMItem;
