"use client";

import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const sensitivity = 8; // Увеличьте или уменьшите это значение для нужной чувствительности
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * sensitivity,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel, { passive: false });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
