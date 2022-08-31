import { useEffect, useState } from "react"
//import { getGifs} from "../helpers/getGifs"


export const GifGrid = ({category}) => {

    useEffect( () => {
        console.log(category)
    }, []) //imprime solo cada que se agrega un componente


    return (
        <>
        <h3> { category }  </h3>
        <p> Hello World</p>
        </>

    )
    
}