"use client";

import { useEffect, useRef, useState } from "react";

interface BannerHeadlineProps {
  children: React.ReactNode;
}

export default function BannerHeadline({ children }: BannerHeadlineProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`banner-headline transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </h2>
  );
}
