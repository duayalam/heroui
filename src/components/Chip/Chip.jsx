import React from 'react';
const Chip = ({ children, color = "gray", className = "" }) => {
  const colors = {
    gray: "bg-gray-200 text-gray-800",
    blue: "bg-blue-200 text-blue-800",
    green: "bg-green-200 text-green-800",
    red: "bg-red-200 text-red-800",
    yellow: "bg-yellow-200 text-yellow-800",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full ${colors[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Chip;