import ClientWrapper from "./ClientWrapper";
import "./stories-style.css";

export const metadata = {
  title: "스토리 보기",
};

export default function StoryLayout({ children }) {
  return (
    <div className="story-body">
      <ClientWrapper />
      {children}
    </div>
  );
}
