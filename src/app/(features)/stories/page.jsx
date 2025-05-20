import Link from "next/link";
import "./stories-style.css";
import { stories } from "./InventoryStories";

export default function MainStory() {
  return (
    <div className="story-list-container">
      {stories.map((user) => {
        return (
          <Link href={`/stories/${user.username}`} key={user.username}>
            <div className="story-thumbnail">
              <img src={user.story} className="story-bg" />
              <div className="story-overlay">
                <img src={user.profile} className="story-avatar" />
                <div className="story-text">
                  <span className="story-username">{user.username}</span>
                  <span className="story-time">{user.time}</span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
