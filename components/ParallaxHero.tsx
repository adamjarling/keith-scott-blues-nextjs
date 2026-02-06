"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ParallaxHeroProps {
  headline?: string;
  imageUrl: string;
  altText: string;
  subHeadline?: string;
  Button?: React.ReactNode;
}

export default function ParallaxHero({
  headline,
  imageUrl,
  altText,
  subHeadline,
  Button,
}: ParallaxHeroProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[80vh]">
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container absolute z-10 w-full mt-20 text-center transform -translate-x-1/2 lg:mt-24 lg:text-left left-1/2">
        <div className="lg:max-w-md">
          {headline && (
            <h1 className="inline-block mb-4 text-4xl leading-none text-white md:text-6xl">
              {headline}
            </h1>
          )}
          {subHeadline && (
            <p className="max-w-sm mx-auto mb-5 text-lg text-white md:max-w-md md:text-xl">
              {subHeadline}
            </p>
          )}
          {Button}
        </div>
      </div>
    </div>
  );
}
