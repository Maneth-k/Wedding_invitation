"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}

function getInitialVisibility(): boolean {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }
  return false;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  distance = 14,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(getInitialVisibility);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div
      ref={ref}
      data-revealed={isVisible ? "true" : "false"}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isVisible ? "none" : `translateY(${distance}px)`,
      }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
