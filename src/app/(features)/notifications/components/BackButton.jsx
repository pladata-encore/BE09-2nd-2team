// components/BackButton.jsx
"use client";

export default function BackButton({ onClick }) {
  return (
    <>
      <img
        src="/images/noti/arrow_left.png"
        style={{
          width: "22px",
          borderRadius: "50%",
          height: "100%",
          marginLeft: "10px",
          marginRight: "30px",
        }}
        onClick={onClick}
      />
    </>
  );
}
