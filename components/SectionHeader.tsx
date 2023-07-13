"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="container pb-5">
      <motion.h2
        initial={{ x: -10 }}
        whileInView={{ x: 0 }}
        transition={{
          type: "spring",
        }}
        className="homepage-subtitle"
      >
        {children}
      </motion.h2>
    </div>
  );
}

export default SectionHeader;
