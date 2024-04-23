import React, { FC, useState } from "react"
import IFormulario from "../interface/IFormulario"
const Formulario: FC<IFormulario> = ( {addCountry} ) => {

    const [inputValue, setInputValue] = useState('');

    const firstLetter = (value:string) => {
        return value.charAt(0).toUpperCase + value.slice(1)
    }
    const enviarFormulario = (event:React.FormEvent) => {
        event.preventDefault();
        if(inputValue.trim().length <= 3 ) return;
        addCountry(inputValue);
        setInputValue('');
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    
    return (
        <form onSubmit={enviarFormulario} className="py-8 flex gap-6 ">
            <input value={inputValue} onChange={handleChange} type="text" placeholder="Ingresa un pais" className="w-full rounded-xl py-2 px-4" />
        </form>
    )
}

export default Formulario