import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="container flex flex-col items-center justify-center py-8 text-sm md:justify-between md:flex-row ">
        <div className="pb-5 tracking-wide uppercase md:pb-0">
          &copy; Keith Scott Blues {/* javascript current year */}
          {new Date().getFullYear()}
        </div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;
