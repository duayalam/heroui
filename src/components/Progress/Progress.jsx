import React from 'react';
import { useEffect, useState } from "react";

const Progress = ({ value, color, label, ...props }) => {
    // Lista de colores Tailwind de BG y Text
    const listColors = {
        dark: "bg-gray-800 text-white",
        blue: "bg-blue-600 text-white",
        red: "bg-red-600 text-white",
        yellow: "bg-yellow-600 text-white",
        green: "bg-green-600 text-white",
        purple: "bg-purple-600 text-white",
        orange: "bg-orange-600 text-white",
        pink: "bg-pink-600 text-white",
        gray: "bg-gray-600 text-white",
        indigo: "bg-indigo-600 text-white",
    };

    // Estado para manejar el valor con animación
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(value);
        }, 100);

        return () => clearTimeout(timer);
    }, [value]);

    return (
        <div className="bg-gray-200 w-auto h-5 mx-3 rounded">
            <div
                className={`${color ? listColors[color] : ''} h-full text-center transition-all duration-500 ease-in-out rounded`}
                style={{ width: `${progress}%` }}
            >
                {label && (
                    <span className="inline-block overflow-hidden whitespace-nowrap text-ellipsis">{progress}% {label}</span>
                )}

            </div>
        </div>
    );
};

export default Progress;
