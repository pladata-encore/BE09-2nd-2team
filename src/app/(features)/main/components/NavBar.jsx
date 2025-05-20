"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchComponent from "../../search/components/SearchComponent";
import NotificationPanel from "../../notifications/components/NotificationPanel";

const navItems = [
  { label: "홈", icon: "main2_3.svg", selectedIcon: "main1_3.svg" },
  { label: "검색", icon: "main1_8.svg", selectedIcon: "main2_8.svg" },
  { label: "탐색 탭", icon: "main1_2.svg", selectedIcon: "main2_2.svg" },
  { label: "릴스", icon: "main1_7.svg", selectedIcon: "main2_7.svg" },
  { label: "메시지", icon: "main1_4.svg", selectedIcon: "main2_4.svg" },
  { label: "알림", icon: "main1_6.svg", selectedIcon: "main2_6.svg" },
  { label: "만들기", icon: "main1_5.svg", selectedIcon: "main2_5.svg" },
  {
    label: "프로필",
    icon: "main1_1.jpg",
    selectedIcon: "main1_1.jpg",
    isProfile: true,
  },
  { label: "Threads", icon: "main1_10.svg", selectedIcon: "main1_10.svg" },
  { label: "더 보기", icon: "main1_9.svg", selectedIcon: "main2_9.svg" },
];

const Navbar = () => {
  const [active, setActive] = useState("홈");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const router = useRouter();

  const NavButton = ({ item }) => {
    const isActive = active === item.label;

    const handleClick = () => {
      if (item.label === "검색") {
        const willOpen = !isSearchOpen;
        setIsSearchOpen(willOpen);
        setIsNotificationOpen(false);
        setActive(willOpen ? "검색" : "홈");
        return;
      }

      // 알림 버튼 처리
      if (item.label === "알림") {
        const willOpen = !isNotificationOpen;
        setIsNotificationOpen(willOpen);
        setIsSearchOpen(false);
        setActive(willOpen ? "알림" : "홈");
        return;
      }

      setIsSearchOpen(false);
      setIsNotificationOpen(false);
      setActive(item.label);
      // ✅ 여기 추가
      if (item.label === "홈") {
        router.push("/main/pages");
        return;
      }
      if (item.label === "메시지") {
        router.push("../../messages");
      }

      if (item.label === "프로필") {
        router.push("/profile");
      }
    };

    return (
      <button
        onClick={handleClick}
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: isActive ? "700" : "400",
        }}
      >
        <img
          src={`/images/main/${isActive ? item.selectedIcon : item.icon}`}
          width={24}
          height={24}
          style={
            item.isProfile ? { borderRadius: "50%", objectFit: "cover" } : {}
          }
        />
        {item.label}
      </button>
    );
  };

  return (
    <>
      {/* 고정된 NavBar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "244px",
          height: "100dvh",
          boxSizing: "border-box",
          backgroundColor: "#fff",
          borderRight: "1px solid #dbdbdb",
          display: "flex",
          flexDirection: "column",
          padding: "8px 12px 20px 12px",
          zIndex: 100,
        }}
      >
        <Link href="/main/pages">
          <img
            src="/images/main/main0.png"
            alt="Instagram 로고"
            style={{
              width: "103px",
              height: "auto",
              padding: "20px 0px 0px 10px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          />
        </Link>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            {navItems.slice(0, 8).map((item, idx) => (
              <NavButton key={idx} item={item} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            {navItems.slice(8).map((item, idx) => (
              <NavButton key={idx} item={item} />
            ))}
          </div>
        </nav>
      </div>
      {/* 검색 슬라이드 창 */}
      {isSearchOpen && (
        <>
          {/* 배경 클릭 시 닫힘 */}
          <div
            onClick={() => {
              setIsSearchOpen(false);
              setActive("홈");
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 643,
              width: "calc(100vw - 320px)",
              height: "100vh",
              backgroundColor: "transparent",
              zIndex: 999,
            }}
          />
          <SearchComponent
            onClose={() => {
              setIsSearchOpen(false);
              setActive("홈");
            }}
          />
        </>
      )}
      {/* 알림 슬라이드 창 */}

      {isNotificationOpen && (
        <>
          {/* 배경 클릭 → 무조건 닫기 */}
          <div
            onClick={() => {
              setIsNotificationOpen(false);
              setActive("홈");
            }}
            style={{
              position: "fixed",
              top: 0,
              left: "643px", // NavBar 다음
              width: "calc(100vw - 244px)",
              height: "100vh",
              backgroundColor: "transparent",
              zIndex: 2000, // 🔥 FollowRequestPanel보다 위에 위치!
            }}
          />

          {/* 알림 + 팔로우 요청 패널 */}
          <NotificationPanel
            isOpen={true}
            onClose={() => {
              setIsNotificationOpen(false);
              setActive("홈");
            }}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
