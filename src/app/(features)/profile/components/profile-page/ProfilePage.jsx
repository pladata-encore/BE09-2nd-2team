import React, { useState } from "react";
import ProfileHeader from "./profile-header/ProfileHeader";
import ProfileTabs from "./profile-tabs/ProfileTabs";
import PostGrid from "./post-grid/PostGrid";
import PostModal from "@/app/(features)/posts/components/post-modal/PostModal";
import { POSTS } from "@/data/POSTS";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [selectedPost, setSelectedPost] = useState(null);

  const user = {
    avatar: "/images/profile/profile1.jpg",
    username: "playdata.io",
    posts: 110,
    followers: 1408,
    following: 119,
    description: "플레이데이터",
  };

  // posts 상수 대신 POSTS 사용, images 배열 첫번째 이미지를 imageUrl로 매핑
  const posts = POSTS.map((post) => ({
    id: post.id,
    imageUrl: post.images[0], // 첫번째 이미지
    ...post, // 필요하면 다른 정보도 포함 가능
  }));

  return (
    <div className="profile-page">
      <ProfileHeader user={user} />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "posts" && (
        <PostGrid
          posts={posts}
          onImageClick={(post) => setSelectedPost(post)}
        />
      )}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default ProfilePage;
