export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JTAhhKTRQtJXBwtvIIOZbEZAVjG3iWkh&q=${category}&limit=5`;
    const resp = await fetch(url); //Esperamos una respuesta de la API
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}