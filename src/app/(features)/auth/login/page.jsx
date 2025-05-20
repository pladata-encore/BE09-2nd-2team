"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 브라우저 너비 확인 후 상태 업데이트
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // 초기 실행 + 리사이즈 이벤트 등록
    handleResize();
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: "32px",
  };

  const leftBoxStyle = {
    width: 585,
    height: 496,
  };

  const imageStyle = {
    width: "550px",
    height: "450px",
  };

  const rightBoxStyle = {
    width: "350px",
    height: "450px",
    // backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const logoStyle = {
    width: 175,
    height: 51,
  };

  const formContainerStyle = {
    width: "100%",
    height: "276px",
    marginTop: "24px",
    marginBottom: "10px",
    padding: "10px 0px",
    // backgroundColor: "green",
  };

  const registerTextStyle = {
    width: 350,
    height: 41,
    padding: "10px 0px",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#0095f6",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      {!isMobile && (
        <div style={leftBoxStyle}>
          <img
            src="/images/auth/login_image.png"
            alt="로그인 사진"
            style={imageStyle}
          />
        </div>
      )}

      <div style={rightBoxStyle}>
        <img
          src="/images/auth/insta_logo.png"
          alt="인스타 로고"
          style={logoStyle}
        />

        <div style={formContainerStyle}>
          <LoginForm />
        </div>

        <div style={registerTextStyle}>
          <p style={{ fontSize: 14 }}>
            계정이 없으신가요?{" "}
            <Link href="/auth/signup" style={linkStyle}>
              가입하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
