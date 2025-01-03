import React from 'react';
import { useState } from "react";

const Select = ({ options, searchable = false, placeholder = "Selecciona una opción",size, ...props }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    // Filtrar opciones si la búsqueda está habilitada
    const filteredOptions = searchable
        ? options.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
        : options;

    // Cambiar la opción seleccionada
    const handleSelect = (option) => {
        setSelected(option);
        setSearchTerm(option.label);
        setIsOpen(false);
    };

    var sizes = {
        sm: "px-3 py-1",
        md: "px-4 py-2",
        lg: "px-6 py-3",
    }
    if(size){
        size = sizes[size]
    }else{
        size = sizes.md
    }

    return (
        <div className="relative w-64">
            {/* Input para buscar solo si es habilitado */}
            <input
                type="text"
                value={searchable ? searchTerm : selected?.label || ""}
                onChange={searchable ? (e) => setSearchTerm(e.target.value) : undefined}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                className={`w-full ${size} border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600`}
                placeholder={placeholder}
                readOnly={!searchable} // Hace el input solo lectura si no es searchable
            />

            {/* Lista de opciones */}
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map(option => (
                            <div
                                key={option.value}
                                className={`${size} text-gray-800 cursor-pointer hover:bg-indigo-100`}
                                onMouseDown={() => handleSelect(option)}
                            >
                                {option.label}
                            </div>
                        ))
                    ) : (
                        <div className={`${size} text-gray-500`}>No hay opciones disponibles</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Select;
