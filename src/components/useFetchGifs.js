import { useEffect, useState } from "react";
import { getGifs } from "./getGifs";

export const useFetchGifs = (category) => { //estamos creando una funcion para usar como hook. 
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const images = await getGifs( category )
        setImages(images)
    }

    useEffect( () => {
        getImages();

    }, [])

    return {
        images: images,
        isoading: false
    }
}