"use client"
import Ripples from 'react-ripples'
const Button = ({ color, size, className, ...props }) => {


    var buttonDefault = "rounded m-1 "

    //COLORES
    var colors = {
        white: "bg-gray-200 text-gray-600",
        dark: "bg-gray-800 text-white",
        blue: "bg-blue-600 text-white",
        red: "bg-red-500 text-white",
        green: "bg-green-500 text-white",
    }
    //TAMAÑOS
    var sizes = {
        sm: "px-3 py-1",
        md: "px-4 py-2",
        lg: "px-6 py-3",
    }
    if (color) {
        buttonDefault += colors[color] + " ";
    }
    else{
        buttonDefault +=  " ";
    }
    if (size) {
        buttonDefault += sizes[size] + " ";
    }else{
        buttonDefault += sizes.md + " ";
    }


    return (
        <Ripples className={`rounded backdrop-opacity-5`} >
            <button  className={`${buttonDefault} ${className?className:''}`} {...props}>{props.children}</button>
        </Ripples>
    )
}
export default Button;