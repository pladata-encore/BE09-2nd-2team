"use client";

import { usePathname } from "next/navigation";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isStoryPage = pathname.startsWith("/stories/");

  return (
    <html lang="ko">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <main
          className="story-main"
          style={{
            minHeight: "80vh",
            padding: isStoryPage ? "0" : "20px",
          }}
        >
          {children}
        </main>
        {!isStoryPage && <Footer />}
      </body>
    </html>
  );
}
