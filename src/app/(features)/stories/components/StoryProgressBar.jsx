"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StoryProgressBar({ duration = 5000, nextUser }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        return prev < 100 ? prev + 1 : 100;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    if (progress === 100 && nextUser) {
      console.log("Navigating to:", nextUser);
      router.push(`/stories/${nextUser}`);
    }
  }, [progress, nextUser, router]);

  return (
    <div className="story-progress-bar" style={{ paddingTop: "20px" }}>
      <div className="progress" style={{ width: `${progress}%` }} />
    </div>
  );
}
