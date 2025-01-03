"use client"
import React from 'react';
import { useState,useEffect } from 'react'
import Ripples from 'react-ripples'

const Alert = ({ className, type, isOpen,...prompt }) => {
    
    const [isVisible, setIsVisible] = useState(true)
    const [isOpenAlert, setIsOpen] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false);
    
    
    const types = {

        dark: "bg-gray-800",
        black: "bg-black",
        red: "bg-red-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
        yellow: "bg-yellow-500",
        orange: "bg-orange-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
        gray: "bg-gray-500",
        teal: "bg-teal-500",
        indigo: "bg-indigo-500",
        lime: "bg-lime-500",
        emerald: "bg-emerald-500",
        fuchsia: "bg-fuchsia-500",
        violet: "bg-violet-500",
        sky: "bg-sky-500",
    }
    const closeAlert = () => {

        setIsOpen(false)
    }


    useEffect(() => {
            if (isOpenAlert && isOpen) {
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
            
        }, [isOpenAlert,isOpen]);

       

    return (
        <>
            {isVisible && (
                <div className={`p-4 text-white rounded-md m-2 ${type && types[type] ? types[type] : ''} ${className} transition-all duration-300 ${
                    isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`} {...prompt}>
                    {prompt.showCloseButton && (
                        <Ripples className='float-end w-10'>
                            <button className=" w-10 text-white bg-[rgba(0,0,0,0.1)]  rounded-md p-1 text-sm " onClick={() => closeAlert()}>
                                X
                            </button>
                        </Ripples>

                    )}
                    {prompt.children}


                </div>


            )
            } </>

    )

}
export default Alert