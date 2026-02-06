"use client";

import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";
import { usePathname } from "next/navigation";

interface NavProps {
  links: {
    href: string;
    label: string;
  }[];
}

export default function Nav({ links }: NavProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isLightPage = ["/about"].includes(pathname || "");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const textColor = isScrolled || isMobileNavOpen ? "text-white" : isLightPage ? "text-white" : "text-black";

  return (
    <div className="fixed top-0 z-20 w-full">
      <div className="container">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isScrolled ? "opacity-90" : "opacity-0"
          }`}
        />
        <nav className="relative flex justify-between items-center py-3 lg:py-5 shadow-sm w-full">
          {/* Logo */}
          <div className="flex items-center z-30">
            <Link
              href="/"
              className={`text-lg font-semibold uppercase transition-colors duration-300 ${textColor} ${
                isMobileNavOpen ? "hidden" : ""
              }`}
            >
              <span className="font-headline">Keith Scott Blues</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex uppercase z-30">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`mx-4 text-sm transition-colors duration-300 ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center z-30">
            <button
              type="button"
              className={`focus:outline-none transition-colors duration-300 ${textColor}`}
              onClick={toggleMobileNav}
            >
              {isMobileNavOpen ? (
                <FiX size={40} color="white" />
              ) : (
                <IoIosMenu size={40} />
              )}
            </button>
          </div>

          {/* Mobile nav overlay */}
          <div
            className={`lg:hidden fixed inset-0 bg-black z-10 h-screen transition-all duration-300 ${
              isMobileNavOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full pointer-events-none"
            }`}
          >
            <div className="container mt-20">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-3xl py-2 text-white hover:text-gray-200"
                  onClick={toggleMobileNav}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-20">
                <SocialMediaIcons />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
