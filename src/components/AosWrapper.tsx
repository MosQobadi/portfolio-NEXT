"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return <>{children}</>;
}
