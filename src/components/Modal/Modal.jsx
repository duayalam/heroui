"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/index";

const ModalTitle = ({ children }) => (
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{children}</h2>
);

const ModalFooter = ({ children }) => (
    <div className="mt-6 flex justify-end space-x-2 dark:text-white">{children}</div>
);

const Modal = ({ onClose, isOpen, children }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            // Pequeño timeout para asegurar que la animación se ejecute
            setTimeout(() => {
                setIsAnimating(true);
            }, 10);
        } else {
            setIsAnimating(false);
            // Esperar a que termine la animación antes de ocultar
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
                isAnimating
                    ? "bg-black bg-opacity-50 backdrop-blur-md"
                    : "bg-black bg-opacity-0 backdrop-blur-none"
            }`}
            onClick={onClose}
        >
            <div
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out max-w-md w-full p-6 ${
                    isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export { Modal, ModalTitle, ModalFooter };