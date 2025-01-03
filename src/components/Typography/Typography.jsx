"use client";
import React from 'react';
 const Typography = ({ children, variant = "body", className = "" }) => {
    const variants = {
      h1: "text-3xl font-bold",
      h2: "text-2xl font-semibold",
      h3: "text-xl font-medium",
      body: "text-base",
      small: "text-sm",
    };
    return <p className={`${variants[variant]} ${className}`}>{children}</p>;
  };
  
  export default Typography