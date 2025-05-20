// components/NotificationSection.jsx
export default function NotificationSection({ title, children }) {
  return (
    <div className="noti-section">
      <div className="noti-section-title">{title}</div>
      {children}
    </div>
  );
}
