"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const existUsername = "qwerty";

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isValidPhone = (value) =>
    /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(value);

  const handleEmailOrPhoneBlur = () => {
    setFocusEmailOrPhone(false);
    const value = emailOrPhone.trim();

    if (value === "") {
      setErrorEmailOrPhoneMessage("This field is required.");
      setIsEmailOrPhoneValid(false);
      return;
    }

    const isPhoneInput = /^[\d+\-]+$/.test(value);

    if (isPhoneInput) {
      if (!isValidPhone(value)) {
        setErrorEmailOrPhoneMessage(
          "휴대폰 번호가 정확하지 않습니다. 국가 번호를 포함하여 전체 전화번호를 입력해주세요."
        );
        setIsEmailOrPhoneValid(false);
        return;
      }
    } else {
      if (!isValidEmail(value)) {
        setErrorEmailOrPhoneMessage("Enter a valid email address.");
        setIsEmailOrPhoneValid(false);
        return;
      }
    }

    setErrorEmailOrPhoneMessage(""); // 이 부분이 빠지면 red border가 유지됩니다
    setIsEmailOrPhoneValid(true);
  };

  const handlePasswordBlur = () => {
    setFocusPassword(false);

    if (password.length < 6) {
      setErrorPasswordMessage("6자 이상의 비밀번호를 만드세요.");
      setIsPasswordValid(false);
      return;
    }

    setErrorPasswordMessage("");
    setIsPasswordValid(true);
  };

  const handleFullNameBlur = () => {
    setFocusFullName(false);

    if (fullName.length >= 64) {
      setErrorFullNameMessage("이름을 64자 미만으로 입력하세요.");
      setIsFullNameValid(false);
      return;
    }

    setErrorFullNameMessage("");
    setIsFullNameValid(true);
  };

  const handleUserNameBlur = () => {
    setFocusUsername(false);

    if (username === "") {
      setErrorUsernameMessage("This field is required.");
      setIsUsernameValid(false);
      return;
    }

    // 정규식: 문자, 숫자, 밑줄, 마침표만 허용
    const usernameRegex = /^[a-zA-Z0-9._]+$/;
    if (!usernameRegex.test(username)) {
      setErrorUsernameMessage(
        "사용자 이름에는 문자, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."
      );
      setIsUsernameValid(false);
      return;
    }

    if (username === existUsername) {
      setErrorUsernameMessage(
        "이 사용자 이름은 이미 다른 사람이 사용하고 있습니다."
      );
      setIsUsernameValid(false);
      return;
    }

    setErrorUsernameMessage("");
    setIsUsernameValid(true);
  };

  const router = useRouter();

  //////////// Signup  ///////////////////////////////////
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // 포커스 상태 관리 (선택사항, 스타일 좀 더 다이나믹하게)
  const [focusEmailOrPhone, setFocusEmailOrPhone] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusFullName, setFocusFullName] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);

  // 에러 메시지 상태 추가
  const [errorEmailOrPhoneMessage, setErrorEmailOrPhoneMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [errorFullNameMessage, setErrorFullNameMessage] = useState("");
  const [errorUsernameMessage, setErrorUsernameMessage] = useState("");

  // 통과 상태 추가
  const [isEmailOrPhoneValid, setIsEmailOrPhoneValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const isSignupEnabled =
    isEmailOrPhoneValid &&
    isPasswordValid &&
    isFullNameValid &&
    isUsernameValid;

  const handleSubmit = (e) => {
    if (!isSignupEnabled) return;

    setErrorEmailOrPhoneMessage("");
    router.push("/auth/login");
  };
  // 플로팅 라벨 스타일 객체
  const floatingLabelStyle = (active) => ({
    position: "absolute",
    left: 6,
    top: active ? 1 : 9,
    fontSize: active ? 10 : 12,
    color: "#8e8e8e",
    backgroundColor: "#fafafa",
    padding: "0 4px",
    pointerEvents: "none",
    transition: "0.2s ease all",
  });

  const inputStyle = {
    width: "100%",
    height: 36,
    padding: "12px 8px 0px",
    fontSize: 12,
    borderRadius: 4,
    border: "1px solid #dbdbdb",
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
    outline: "none",
    paddingRight: "36px",
    boxShadow: "none",
  };

  const containerStyle = {
    display: "flex",
    marginBottom: "44px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  const boxStyle = {
    backgroundColor: "white",
    // height: '560px',
    border: "1px solid #dbdbdb",
    width: "350px",
    textAlign: "center",
  };

  const logoStyle = {
    width: 175,
    height: 51,
    paddingTop: "35px",
  };

  const buttonStyle = {
    width: "100%",
    height: "33px",
    backgroundColor: isSignupEnabled ? "#0095F6" : "#b2dffc",
    color: isSignupEnabled ? "white" : "#eee",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    cursor: isSignupEnabled ? "pointer" : "not-allowed",
    transition: "background-color 0.3s ease",
  };

  const floatingInputStyle = {
    position: "relative",
    width: "100%",
    marginTop: 8,
  };

  const infoTextStyle = {
    fontSize: "12px",
    color: "#888",
    textAlign: "center",
    marginTop: "10px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const linkStyle = {
    color: "#3897f0",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img
          src="/images/auth/insta_logo.png"
          alt="인스타 로고"
          style={logoStyle}
        />

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
          <p style={{ color: "#737373", margin: "9px 0", fontWeight: "bold" }}>
            친구들의 사진과 동영상을 보려면 가입하
            <br />
            세요.
          </p>

          {/* 페이스북 버튼 */}
          <button
            type="button"
            style={{
              ...buttonStyle,
              marginBottom: "5px",
              backgroundColor: "#0095f6",
              color: "white",
              cursor: "pointer",
              display: "flex", // flexbox 사용
              alignItems: "center", // 수직 가운데 정렬
              justifyContent: "center", // (선택) 가운데 정렬
            }}
          >
            <img
              src="/images/auth/facebook_icon.png"
              alt="Facebook 로그인"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "6px",
              }}
            />
            Facebook으로 로그인
          </button>

          {/* 또는 구분선 */}
          <div
            style={{
              margin: "10px 0",
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

          {/* emailOrPhone */}
          <div style={floatingInputStyle}>
            <input
              id="emailOrPhone"
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              onFocus={() => setFocusEmailOrPhone(true)}
              onBlur={handleEmailOrPhoneBlur}
              required
              autoComplete="emailOrPhone"
              style={{
                ...inputStyle,
                border:
                  errorEmailOrPhoneMessage && !focusEmailOrPhone
                    ? "1px solid #ff4d4f"
                    : "1px solid #dbdbdb",
              }}
              placeholder=" " // placeholder 공백으로 둬야 :placeholder-shown 효과 회피 가능
            />
            <label
              htmlFor="emailOrPhone"
              style={floatingLabelStyle(
                focusEmailOrPhone || emailOrPhone !== ""
              )}
            >
              휴대폰 번호 또는 이메일 주소
            </label>
            {(errorEmailOrPhoneMessage && !focusEmailOrPhone) ||
            isEmailOrPhoneValid ? (
              <img
                src={
                  errorEmailOrPhoneMessage && !focusEmailOrPhone
                    ? "/images/auth/error_icon.png"
                    : "/images/auth/success_icon.png"
                }
                alt={errorEmailOrPhoneMessage ? "error" : "success"}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "22px",
                  height: "22px",
                  cursor: "pointer",
                  opacity: 0.6,
                }}
              />
            ) : null}
          </div>
          {errorEmailOrPhoneMessage && !focusEmailOrPhone && (
            <p
              style={{
                color: "#ed4956",
                fontSize: "12px",
                marginTop: "2px",
                marginLeft: "8px",
                marginBottom: "1px",
                textAlign: "left",
                width: "100%", // 중요!
              }}
            >
              {errorEmailOrPhoneMessage}
            </p>
          )}

          {/* password */}
          <div style={floatingInputStyle}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusPassword(true)}
              onBlur={handlePasswordBlur}
              required
              autoComplete="current-password"
              style={{
                ...inputStyle,
                paddingRight: "50px",
                border:
                  errorPasswordMessage && !focusPassword
                    ? "1px solid #ff4d4f"
                    : "1px solid #dbdbdb",
              }}
              placeholder=" "
            />
            <label
              htmlFor="password"
              style={floatingLabelStyle(focusPassword || password !== "")}
            >
              비밀번호
            </label>
            {/* 표시 / 숨기기 버튼과 에러 아이콘을 같이 감싸는 컨테이너 */}
            {(password !== "" || errorPasswordMessage) && (
              <div
                style={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px", // 아이콘과 버튼 사이 간격
                }}
              >
                {(errorPasswordMessage && !focusPassword) || isPasswordValid ? (
                  <img
                    src={
                      errorPasswordMessage && !focusPassword
                        ? "/images/auth/error_icon.png"
                        : "/images/auth/success_icon.png"
                    }
                    alt={errorPasswordMessage ? "error" : "success"}
                    style={{
                      width: "22px",
                      height: "22px",
                      cursor: "pointer",
                      opacity: 0.6,
                    }}
                  />
                ) : null}

                {/* 표시 / 숨기기 버튼 */}
                {password !== "" && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
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
            )}
          </div>
          {errorPasswordMessage && !focusPassword && (
            <p
              style={{
                color: "#ed4956",
                fontSize: "12px",
                marginTop: "2px",
                marginLeft: "8px",
                marginBottom: "1px",
                textAlign: "left",
                width: "100%", // 중요!
              }}
            >
              {errorPasswordMessage}
            </p>
          )}

          {/* fullName */}
          <div style={floatingInputStyle}>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onFocus={() => setFocusFullName(true)}
              onBlur={handleFullNameBlur}
              autoComplete="fullName"
              style={{
                ...inputStyle,
                border:
                  errorFullNameMessage && !focusFullName
                    ? "1px solid #ff4d4f"
                    : "1px solid #dbdbdb",
              }}
              placeholder=" " // placeholder 공백으로 둬야 :placeholder-shown 효과 회피 가능
            />
            <label
              htmlFor="fullName"
              style={floatingLabelStyle(focusFullName || fullName !== "")}
            >
              성명
            </label>
            {(errorFullNameMessage && !focusFullName) ||
            (isFullNameValid && fullName !== "") ? (
              <img
                src={
                  errorFullNameMessage && !focusFullName
                    ? "/images/auth/error_icon.png"
                    : "/images/auth/success_icon.png"
                }
                alt={errorFullNameMessage ? "error" : "success"}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "22px",
                  height: "22px",
                  cursor: "pointer",
                  opacity: 0.6,
                }}
              />
            ) : null}
          </div>
          {errorFullNameMessage && !focusFullName && (
            <p
              style={{
                color: "#ed4956",
                fontSize: "12px",
                marginTop: "2px",
                marginLeft: "8px",
                marginBottom: "1px",
                textAlign: "left",
                width: "100%", // 중요!
              }}
            >
              {errorFullNameMessage}
            </p>
          )}

          {/* username */}
          <div style={floatingInputStyle}>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                // 30자 길이 제한
                const value = e.target.value;

                if (value.length <= 30) {
                  setUsername(value);
                }
              }}
              onFocus={() => setFocusUsername(true)}
              onBlur={handleUserNameBlur}
              required
              autoComplete="username"
              style={{
                ...inputStyle,
                border:
                  errorUsernameMessage && !focusUsername
                    ? "1px solid #ff4d4f"
                    : "1px solid #dbdbdb",
              }}
              placeholder=" " // placeholder 공백으로 둬야 :placeholder-shown 효과 회피 가능
            />
            <label
              htmlFor="username"
              style={floatingLabelStyle(focusUsername || username !== "")}
            >
              사용자 이름
            </label>
            {(errorUsernameMessage && !focusUsername) || isUsernameValid ? (
              <img
                src={
                  errorUsernameMessage && !focusUsername
                    ? "/images/auth/error_icon.png"
                    : "/images/auth/success_icon.png"
                }
                alt={errorUsernameMessage ? "error" : "success"}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "22px",
                  height: "22px",
                  cursor: "pointer",
                  opacity: 0.6,
                }}
              />
            ) : null}
          </div>

          {errorUsernameMessage && !focusUsername && (
            <p
              style={{
                color: "#ed4956",
                fontSize: "12px",
                marginTop: "2px",
                marginLeft: "8px",
                marginBottom: "1px",
                textAlign: "left",
                width: "100%", // 중요!
              }}
            >
              {errorUsernameMessage}
            </p>
          )}

          <p style={infoTextStyle}>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다. <span style={linkStyle}>더 알아보기</span>
          </p>

          {/* 가입 버튼 */}
          <button
            type="submit"
            disabled={!isSignupEnabled}
            style={{
              marginTop: "12px",
              marginBottom: "30px",
              width: "100%",
              padding: "8px 0",
              backgroundColor: isSignupEnabled ? "#0095f6" : "#4db5fa",
              color: isSignupEnabled ? "#fff" : "#eee",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: isSignupEnabled ? "pointer" : "not-allowed",
              transition: "background-color 0.3s ease",
            }}
          >
            가입
          </button>
        </form>
      </div>
      <div
        style={{
          ...boxStyle,
          height: "63px",
          marginTop: "10px",
          padding: "10px 0",
          display: "flex",
          flexDirection: "column", // 세로 정렬!
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          border: "1px solid #dbdbdb", // boxShadow 대신 테두리만
          boxShadow: "none", // 쉐도우 제거
        }}
      >
        <div>계정이 있으신가요?</div>
        <div
          style={{
            color: "#0095f6",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          <Link href="/auth/login" style={linkStyle}>
            로그인
          </Link>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "20px", fontSize: "14px" }}>
          앱을 다운로드하세요.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/auth/appstore.png" // App Store 버튼 이미지
              alt="App Store"
              style={{ height: "40px" }}
            />
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/auth/google_play.png" // Google Play 버튼 이미지
              alt="Google Play"
              style={{ height: "40px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
