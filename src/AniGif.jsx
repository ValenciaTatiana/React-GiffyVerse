import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const AniGif = () => {

    const [categories, setCategories] = useState(['Memes','Demon Slayer', 'Horror','Attack on Titan']); //Espacio en memoria para guardar las categorias

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return; // Si la categoria ya existe no se agrega
        setCategories([newCategory, ...categories]); // Agregar una nueva categoria al array de categorias
    }

    return (
        <>
            <h1>GiffyVerse</h1>

            {/* Input para agregar categorias */}
            <AddCategory onNewCategory={onAddCategory} />

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}