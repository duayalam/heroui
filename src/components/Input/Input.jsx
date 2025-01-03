"use client"
import React from 'react';
const Input = ({ color, size, className, placeholder, ...props }) => {


    var InputDefault = "rounded-xl m-1 dark:bg-gray-800 "

    //COLORES
    var colors = {
        dark: "border-[2px] border-gray-500 p-2 focus:outline-none focus:ring-4 focus:ring-gray-200",
        blue: "border-[2px] border-blue-500 p-2 focus:outline-none focus:ring-4 focus:ring-blue-200",
        red: "border-[2px] border-red-500 p-2 focus:outline-none focus:ring-4 focus:ring-red-200",
        green: "border-[2px] border-green-500 p-2 focus:outline-none focus:ring-4 focus:ring-green-200",
    }
    //TAMAÑOS
    var sizes = {
        sm: "px-3 py-1",
        md: "px-4 py-2",
        lg: "px-6 py-4",
    }
    if (color) {
        InputDefault += colors[color] + " ";
    }
    else {
        InputDefault += colors.dark + " ";
    }
    if (size) {
        InputDefault += sizes[size] + " ";
    }
    else {
        InputDefault += sizes.md + " ";
    }


    return (
        <div class="relative">
            <input className={`${InputDefault} ${className} peer`} placeholder={props.label ? "" : placeholder} {...props} />
            {props.label && (
                <label
                    htmlFor={props.id}
                    className="absolute left-3 top-[-10px] p-1 bg-white dark:bg-gray-800 dark:text-white text-xs text-gray-600 tracking-wide 
                    transition-all duration-300 transform scale-100  peer-placeholder-shown:left-3 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:top-[-5px] peer-focus:scale-75 peer-focus:p-0 peer-focus:text-sm "
                >
                    {props.label}
                </label>
            )}
        </div>


    )
}
export default Input;