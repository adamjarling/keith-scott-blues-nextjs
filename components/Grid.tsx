import React, { useEffect, useState } from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: number;
}

type ColumnVariants = {
  [key: number]: string;
};

const Grid: React.FC<GridProps> = ({ children, className, cols = 3 }) => {
  const columnVariants: ColumnVariants = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };

  return (
    <div
      className={`grid gap-2 grid-cols-1 ${columnVariants[cols]}  ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Grid;
