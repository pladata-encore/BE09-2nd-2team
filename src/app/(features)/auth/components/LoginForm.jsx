"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  // 임시 아디 비번
  const id = "qwerty";
  const pw = "qwerty";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 표시 여부 상태

  // 포커스 상태 관리 (선택사항, 스타일 좀 더 다이나믹하게)
  const [focusUsername, setFocusUsername] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  // 에러 메시지 상태 추가
  const [errorMessage, setErrorMessage] = useState("");

  // 로그인 버튼 활성화 조건
  const isLoginEnabled = username.trim() !== "" && password.trim() !== "";

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") return;

    // 로그인 정보 검증
    if (username !== id || password !== pw) {
      setErrorMessage("잘못된 비밀번호입니다. 다시 확인하세요.");
      return;
    }

    // 성공 시 에러 메시지 초기화 후 페이지 이동
    setErrorMessage("");
    router.push("/main/pages");
  };
  // 플로팅 라벨 스타일 객체
  const floatingLabelStyle = (active) => ({
    position: "absolute",
    left: 6,
    top: active ? 1 : 9, // 12 -> 6으로 올려서 placeholder와 너무 겹치지 않도록
    fontSize: active ? 10 : 12,
    color: "#8e8e8e",
    backgroundColor: "#fafafa",
    padding: "0 4px",
    pointerEvents: "none",
    transition: "0.2s ease all",
  });

  // input 컨테이너 스타일
  const floatingInputStyle = {
    position: "relative",
    width: "100%",
    marginTop: 12,
  };

  const inputStyle = {
    width: "100%",
    height: 36, // ✅ 고정 높이
    padding: "12px 8px 0px", // ✅ 상단은 줄이고, 하단은 늘림 → 텍스트가 아래로
    fontSize: 12,
    borderRadius: 4,
    border: "1px solid #dbdbdb",
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
    outline: "none",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "270px",
        margin: "0 auto",
      }}
    >
      {/* username */}
      <div style={floatingInputStyle}>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setFocusUsername(true)}
          onBlur={() => setFocusUsername(false)}
          required
          autoComplete="username"
          style={inputStyle}
          placeholder=" " // placeholder 공백으로 둬야 :placeholder-shown 효과 회피 가능
        />
        <label
          htmlFor="username"
          style={floatingLabelStyle(focusUsername || username !== "")}
        >
          전화번호, 사용자 이름 또는 이메일
        </label>
      </div>

      {/* password */}
      <div style={floatingInputStyle}>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocusPassword(true)}
          onBlur={() => setFocusPassword(false)}
          required
          autoComplete="current-password"
          style={{ ...inputStyle, paddingRight: "50px" }}
          placeholder=" "
        />
        <label
          htmlFor="password"
          style={floatingLabelStyle(focusPassword || password !== "")}
        >
          비밀번호
        </label>

        {/* 표시 / 숨기기 버튼 - 입력값 있을 때만 보임 */}
        {password !== "" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: 14,
              padding: 0,
              userSelect: "none",
            }}
          >
            {showPassword ? "숨기기" : "비밀번호 표시"}
          </button>
        )}
      </div>

      {/* 로그인 버튼 */}
      <button
        type="submit"
        disabled={!isLoginEnabled}
        style={{
          marginTop: "12px",
          width: "100%",
          padding: "8px 0",
          backgroundColor: isLoginEnabled ? "#0095f6" : "#4db5fa",
          color: isLoginEnabled ? "#fff" : "#eee",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "14px",
          cursor: isLoginEnabled ? "pointer" : "not-allowed",
          transition: "background-color 0.3s ease",
        }}
      >
        로그인
      </button>
      {/* 또는 구분선 */}
      <div
        style={{
          margin: "16px 0",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <hr style={{ flex: 1, borderTop: "1px solid #dbdbdb" }} />
        <span
          style={{
            margin: "0 10px",
            color: "#8e8e8e",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          또는
        </span>
        <hr style={{ flex: 1, borderTop: "1px solid #dbdbdb" }} />
      </div>

      {/* 페이스북 로그인 */}
      <button
        type="button"
        style={{
          paddingTop: "5px",
          background: "none",
          border: "none",
          color: "#3579EA",
          fontWeight: "bold",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img
          src="/images/auth/facebook_logo.png"
          alt="Facebook 로그인"
          style={{ width: "16px", height: "16px", marginRight: "8px" }}
        />
        Facebook으로 로그인
      </button>

      {/* 에러 메시지 출력 */}
      {errorMessage && (
        <div
          style={{
            color: "#ED4956",
            marginTop: "8px",
            fontSize: "14px",
            width: "100%",
            textAlign: "center",
          }}
          role="alert"
        >
          {errorMessage}
        </div>
      )}

      {/* 비밀번호 잊음 */}
      <a
        href="#"
        style={{
          marginTop: "25px",
          fontSize: "14px",
          color: "#00376b",
          textDecoration: "none",
        }}
      >
        비밀번호를 잊으셨나요?
      </a>
    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "12px",
  borderRadius: "4px",
  border: "1px solid #dbdbdb",
  backgroundColor: "#fafafa",
  boxSizing: "border-box", // ✅ 이거 추가!
};
