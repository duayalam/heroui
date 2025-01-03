import React,{ useState } from "react";

export const Accordion = ({ children, className = "" }) => (
  <div className={`border border-gray-200 rounded-lg ${className}`}>{children}</div>
);

export const AccordionHeader = ({ children, onClick, isOpen, className = "" }) => (
  <div
    onClick={onClick}
    className={`p-4 flex justify-between items-center cursor-pointer ${className}`}
  >
    {children}
    <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
  </div>
);

export const AccordionBody = ({ children, isOpen, className = "" }) => (
  <div className={`p-4 ${isOpen ? "block" : "hidden"} ${className}`}>{children}</div>
);
