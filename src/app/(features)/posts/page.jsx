"use client";

import React, { useState } from "react";
import PostModal from "./components/post-modal/PostModal";

export default function PostModalTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => setIsModalOpen(false);

  return (
    <div style={{ padding: "50px" }}>
      <h1>🧪 Post Modal 테스트 페이지</h1>

      {isModalOpen && (
        <PostModal
          post={{
            id: 1,
            images: [
              "/images/feed/feed1/feed1_1.jpg",
              "/images/feed/feed1/feed1_2.jpg",
              "/images/feed/feed1/feed1_3.jpg",
              "/images/feed/feed1/feed1_4.jpg",
              "/images/feed/feed1/feed1_5.jpg",
              "/images/feed/feed1/feed1_6.jpg",
            ], // id만 있으면 PostModal 안에서 이미지 경로가 자동 생성됩니다.
            username: "playdata.io",
            userAvatar: "/images/profile/profile1.jpg",
            content: `"부트캠프 동기들과 책 스터디를 했는데 최종 면접에서 저희가 읽은 책에 관심을 가져주셨어요. 
            오프라인 부트캠프 정말 좋았어요. 사람은 사람을 만나야 한다는 생각이 들어요💓"
            
백엔드 개발 부트캠프를 수료하고 풀스택 개발자로 취업한 채림님의 풀 스토리를 확인해보세요!

채림님 취업 스토리 확인하기 👉🏻 프로필 링크 클릭`,
            comments: [
              {
                username: "seungje_yu",
                text: "열공해요!",
                img: "/images/post/comment/seungje.png",
              },
              {
                username: "LimHub",
                text: "멋져요~",
                img: "/images/post/comment/LimHub.png",
              },
              {
                username: "Berry-mas",
                text: "배고파요👿",
                img: "/images/post/comment/Berry-mas.png",
              },
              {
                username: "hyeblee",
                text: "집에 가고 싶어요🏠",
                img: "/images/post/comment/hyeblee.png",
              },
            ],
          }}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
