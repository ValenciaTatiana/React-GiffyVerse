import { useState, useEffect } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value); //Evento al escribir, target es el input y value es el valor ingresado en el input
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) 
            return; // Si el valor ingresado es menor o igual a 1 no se agrega la categoria

        onNewCategory(inputValue.trim()); // Llamar a la funcion que agrega la categoria
        setInputValue(''); // Limpiar el input
    }

    return (
        <>
            <form onSubmit = {onSubmit}>
                <input type="text" placeholder="Buscar Gif" value = {inputValue} onChange={onInputChange} />
            </form>
        </>
    )
}