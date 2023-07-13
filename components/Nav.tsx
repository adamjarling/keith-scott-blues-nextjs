"use client";

import { FiMenu, FiX } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import { IoIosMenu } from "react-icons/io";

interface NavProps {
  links: {
    href: string;
    label: string;
  }[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      setOpacity(Math.ceil(v));
    });
  }, [scrollYProgress]);

  const navVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <div className="fixed top-0 z-20 w-full">
      <div className="container">
        <motion.div
          className={`absolute inset-0 bg-white ${
            opacity > 0 ? "shadow-lg" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{
            duration: 0.2,
          }}
        ></motion.div>
        <nav
          className={`flex justify-between items-center py-3 md:py-5 shadow-sm w-full`}
        >
          <div className={`flex items-center opacity-100 z-30`}>
            <a href="/" className={`text-lg font-semibold uppercase`}>
              <span className="">Casey Murtaugh</span>
            </a>
          </div>
          <div className={`hidden md:flex uppercase opacity-100 z-30`}>
            {links.map((link) => (
              <a key={link.label} href={link.href} className={`mx-4 text-sm`}>
                {link.label}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center z-20`}>
            <button
              type="button"
              className={` focus:outline-none`}
              onClick={toggleMobileNav}
            >
              {isMobileNavOpen ? (
                <FiX size={40} color="white" />
              ) : (
                <IoIosMenu size={40} />
              )}
            </button>
          </div>
          {isMobileNavOpen && (
            <motion.div
              className={`md:hidden fixed inset-0 bg-white z-10 h-screen`}
              initial="closed"
              animate="open"
              variants={navVariants}
            >
              <div className="mt-20">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`block text-3xl py-2 px-4`}
                    onClick={toggleMobileNav}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
