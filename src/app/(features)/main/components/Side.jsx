// components/Sidebar.jsx
"use client";
import RecommendedUser from "./RecommendedUser";
import recommendedUsers from "../data/UsersRecommended";
import Link from "next/link";
import ProfilePage from "../../profile/components/profile-page/ProfilePage";

const Sidebar = ({ children }) => (
  <div style={{ width: "319px", paddingLeft: "64px" }}>{children}</div>
);

const SideContents = ({ children }) => (
  <div
    style={{
      width: "319px",
      height: "100%",
    }}
  >
    {children}
  </div>
);

const SideMyProfile = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      marginTop: "16px",
      padding: "0 16px",
      fontSize: "14px",
      backgroundColor: "transparent",
    }}
  >
    <div style={{ width: "56px", height: "44px" }}>
      {/* ✅ 여기: 프로필 사진 클릭 시 /profile로 이동 */}
      <Link href="/profile">
        <img
          src="/images/profile/profile1.jpg"
          alt="profile"
          style={{ width: "44px", height: "44px", borderRadius: "50%" }}
        />
      </Link>
    </div>
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
        color: "black",
        width: "195px",
        height: "44px",
      }}
    >
      <div>
        <div style={{ fontWeight: "bold", fontSize: "14px" }}>playdata.io</div>
        <div style={{ fontSize: "14px", color: "gray" }}>플레이데이터</div>
      </div>
    </div>
    <div
      style={{
        marginLeft: "12px",
        alignSelf: "center",
      }}
    >
      <a
        href="#"
        onClick={(e) => e.preventDefault()} // 나중에 실제 경로로 변경
        style={{
          color: "#0095f6",
          fontSize: "12px",
          textDecoration: "none",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          display: "inline-block",
          cursor: "pointer",
          transition: "color 0.1s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "rgb(38, 38, 38)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "rgb(0, 149, 246)";
        }}
      >
        전환
      </a>
    </div>
  </div>
);

const SideRecommend = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      marginTop: "24px",
      marginBottom: "8px",
      fontSize: "14px",
    }}
  >
    <div
      style={{
        width: "319px",
        padding: "0px 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "rgb(115, 115, 115)",
            padding: "0px 0px 10px 0px",
          }}
        >
          회원님을 위한 추천
        </span>
        <span
          style={{
            cursor: "pointer",
            color: "#262626",
            fontSize: "12px",
            fontWeight: 600,
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "rgb(123, 123, 123)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#262626";
          }}
        >
          모두 보기
        </span>
      </div>
      <div
        style={{
          alignContent: "stretch",
          alignItems: "stretch",
          alignSelf: "auto",
          color: "rgb(0,0,0)",
          direction: "ltr",
          flexDirection: "column",
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "4px",
          marginLeft: "4px",
        }}
      >
        <div
          style={{
            alignContent: "stretch",
            alignItems: "stretch",
            alignSelf: "auto",
            color: "rgb(0,0,0)",
            direction: "ltr",
            flexDirection: "column",
            display: "flex",
            boxSizing: "border-box",
            padding: "8px 0px 8px 0px",
            position: "static",
          }}
        >
          <div
            style={{
              color: "black",
              direction: "ltr",
              height: "300px",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                lineHeight: "18px",
                fontSize: "14px",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div style={{ height: "auto", overflowY: "auto" }}>
                {recommendedUsers.map((user, idx) => (
                  <RecommendedUser key={idx} {...user} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SideFooter = () => {
  const items = [
    "소개",
    "도움말",
    "홍보 센터",
    "API",
    "채용 정보",
    "개인정보처리방침",
    "약관",
    "위치",
    "언어",
    "Meta Verified",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "8px",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          width: "319px",
          padding: "0px 16px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "12px", color: "#c7c7c7" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              lineHeight: "16px",
            }}
          >
            {items.map((item, index) => (
              <span
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    color: "#c7c7c7",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.1s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#999";
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#c7c7c7";
                    e.target.style.textDecoration = "none";
                  }}
                >
                  {item}
                </a>
                {index < items.length - 1 && (
                  <span style={{ margin: "0 2px" }}>·</span> // ← 이건 링크 아님
                )}
              </span>
            ))}
          </div>
          <div style={{ marginTop: "20px" }}>
            © 2025 INSTAKILOGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
export { SideContents, SideMyProfile, SideRecommend, SideFooter };
