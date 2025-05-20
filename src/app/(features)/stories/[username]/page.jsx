// app/stories/[username]/page.jsx
"use client";

import { use } from "react";
import MainStoryTop from "../components/MainStoryTop";
import StoryFooter from "../components/StoryFooter";
import StoryMedia from "../components/StoryMedia";
import StoryProgressBar from "../components/StoryProgressBar";
import { stories } from "../InventoryStories";
import { useRouter } from "next/navigation";

export default function StoryViewer({ params }) {
  const actualParams = use(params);
  const { username } = actualParams;
  const currentIndex = stories.findIndex(
    (s) => s.username.toLocaleLowerCase() === username.toLocaleLowerCase()
  );
  const nextUser = stories[currentIndex + 1]?.username;
  const userData = stories[currentIndex];
  const prevUser = stories[currentIndex - 1];
  const prevUser2 = stories[currentIndex - 2];
  const overUser = stories[currentIndex + 1];
  const overUser2 = stories[currentIndex + 2];
  const router = useRouter();
  return (
    <div className="story-dark-bg">
      <div className="story-header">
        <img
          src="/images/noti/insta_logo.svg"
          alt="Instagram"
          className="instagram-logo"
          style={{ height: "40px" }}
        />
        <button
          className="close-button"
          onClick={() => router.push("/main/pages")}
        >
          ×
        </button>
      </div>
      {/* 왼쪽 썸네일 */}
      {prevUser2 && (
        <div className="story-preview-thumbnail left2">
          <img src={prevUser2.story} />
          <div className="preview-ring">
            <img
              className="preview-avatar"
              src={prevUser2.profile}
              alt="profile"
            />
          </div>
        </div>
      )}
      {prevUser && (
        <div className="story-preview-thumbnail left">
          <img src={prevUser.story} />
          <div className="preview-ring">
            <img
              className="preview-avatar"
              src={prevUser.profile}
              alt="profile"
            />
          </div>
        </div>
      )}

      <div className="story-card-wrapper">
        <div className="story-card">
          <StoryProgressBar duration={5000} nextUser={nextUser} />
          <MainStoryTop
            user={username}
            profile={userData.profile}
            time={userData.time}
          />
          <StoryMedia story={userData.story} />
          <StoryFooter user={username} />
        </div>
      </div>
      {/* 오른쪽 썸네일 */}
      {overUser && (
        <div className="story-preview-thumbnail right">
          <img src={overUser.story} />
          <div className="preview-ring">
            <img
              className="preview-avatar"
              src={overUser.profile}
              alt="profile"
            />
          </div>
        </div>
      )}
      {overUser2 && (
        <div className="story-preview-thumbnail right2">
          <img src={overUser2.story} />
          <div className="preview-ring">
            <img
              className="preview-avatar"
              src={overUser2.profile}
              alt="profile"
            />
          </div>
        </div>
      )}
      <div className="story-side-thumbnail right" />
      {currentIndex > 0 && (
        <div
          className="story-nav-button left"
          onClick={() =>
            router.push(`/stories/${stories[currentIndex - 1].username}`)
          }
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {currentIndex < stories.length - 1 && (
        <div
          className="story-nav-button right"
          onClick={() =>
            router.push(`/stories/${stories[currentIndex + 1].username}`)
          }
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
