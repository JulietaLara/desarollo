
export const  getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SxBTpzUqdOLJ9TfJXWZacUkBzqhmEQM9&q=${category}&limit=25&offset=0&rating=g&lang=en`


    const resp = await fetch(url) //consume la api
    const {data} = await resp.json() //llama a la data
    const gifs = data.map ( img => {
        return { //
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    }) 
    return gifs
}