export const getGifs = async( category )=>{
    const apiKey = '1sTzaBPrzXYwRt00x6YSIeUv156I17GA';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${apiKey}&limit=10`;
    

    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;


}