import { useEffect, useState } from "react"
import { getGifs } from "./getGifs"
import { useFetchGifs } from "./useFetchGifs"
import { GifItem } from "./GifItem"
//import { getGifs} from "../helpers/getGifs"


export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)

    // const [sal, set] = useState([])

    // useEffect( () => {
    //     console.log(category)
    // }, []) //imprime solo cada que se agrega un componente

  
    // const newFunction = async(  ) => {
    //     var g = await getGifs(category) //se pone await porque es async 
    //     console.log(g)
    //     set(g)
    // }

   

    return (
        <>
         {/* <GifItem newFunction={newFunction} /> 
        <h3> { category }  </h3>
        <p> Hello World</p>
        <button onClick={() => newFunction()}> Bim barabum mr.worldwide </button>
        <p>  {JSON.stringify(sal)}</p> */}

        <h3> { category }  </h3>
        <div className="card-grid">
            {
                images.map((image,key) => {
                    return <GifItem key={key} {...image} ></GifItem>
                })
            }

        </div>


        </>

    )
    
}