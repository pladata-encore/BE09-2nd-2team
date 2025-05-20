"use client";

import { useEffect } from "react";

export default function ClientWrapper() {
  useEffect(() => {
    document.body.classList.add("story-mode");
    return () => {
      document.body.classList.remove("story-mode");
    };
  }, []);

  return null;
}
