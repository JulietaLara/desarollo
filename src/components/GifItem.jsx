import { getGifs } from "./getGifs";
import { GifGrid } from "./GifGrid";

export const GifItem = (getGifs ) => { //siempre recibe props con llaves

    return(
        <> 
        <li> 
             <div >
                <a href={getGifs.url} target="_blank">{getGifs.title}</a>
                <br></br>
                <img src={getGifs.url}></img>
                <br></br>
                <p>ID:{getGifs.id}</p>
                <br></br>
            </div>
        </li>
            
        </>
    )
}