// components/Feed.jsx
import PostCard from "./PostCards";
import feedData from "../data/DataOfFeed";
const Feed = () => {
  return (
    <div style={{ backgroundColor: "rgb(255,255,255)" }}>
      {feedData.map((post, index) => (
        <PostCard
          key={index}
          username={post.username}
          profileImgUrl={post.profileImgUrl}
          imgUrl={post.imgUrl}
          content={post.content}
        />
      ))}
    </div>
  );
};

const FeedTray = ({ children }) => (
  <div style={{ width: "468px", margin: "0 auto" }}>{children}</div>
);
const FeedPage = ({ children }) => (
  <div style={{ width: "100%", height: "100%" }}>{children}</div>
);
export { Feed };
export { FeedTray };
export default FeedPage;
