import { useEffect, useState } from "react";

export const useFetch = async (web) => {
   // const url = `https://api.giphy.com/v1/gifs/search?api_key=SxBTpzUqdOLJ9TfJXWZacUkBzqhmEQM9&q=${category}&limit=25&offset=0&rating=g&lang=en`
    const [url, useState] = useState(web)


    const resp = await fetch(url) //consume la api
    const {data} = await resp.json() //llama a la data
    const gifs = data.map ( img => {
        return { //
            data:null,
            isLoading: true,
            hasError: null
        }
    }) 
}