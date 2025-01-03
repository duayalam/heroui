"use client";
import React from 'react';
export const List = ({ children, className = "" }) => (
    <ul className={`divide-y divide-gray-200  ${className}`}>{children}</ul>
  );
  
  export const ListItem = ({ children, className = "" }) => (
    <li className={`px-4 py-2 hover:bg-gray-100 border-none text-gray-700 text-sm ${className}`}>{children}</li>
  );
  
  export const ListItemPrefix = ({ children, className = "" }) => (
    <span className={`mr-4 border-none text-gray-700 ${className}`}>{children}</span>
  );
  
  export const ListItemSuffix = ({ children, className = "" }) => (
    <span className={`ml-auto border-none text-gray-700 ${className}`}>{children}</span>
  );
  