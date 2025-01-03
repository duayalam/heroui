"use client";
import React from 'react';
export const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
        {children}
    </div>
);

export const CardHeader = ({ children, className = "" }) => (
    <div className={`p-4 border-b ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = "" }) => (
    <div className={`p-4 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
    <div className={`p-4 border-t ${className}`}>{children}</div>
);
