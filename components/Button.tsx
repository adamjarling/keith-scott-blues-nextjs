import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  cb: () => void;
  size?: "sm";
  classes?: string;
}

const Button: React.FC<Props> = ({ children, cb, size, classes }) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: "#efefef",
        transition: {
          duration: 0.5,
        },
      }}
      className={`py-5 ${
        size && size === "sm" ? "text-sm" : "text-xl"
      } font-medium uppercase bg-white px-7 border-2 shadow border-black ${
        classes ? classes : ""
      }`}
      onClick={cb}
    >
      {children}
    </motion.button>
  );
};

export default Button;
