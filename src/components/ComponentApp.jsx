import { useState } from "react"
import {AddCategory} from "./AddCategory"
import { GifGrid } from "./GifGrid"


export const ComponentApp = () => {

    
    const [ categories, addCat] = useState(['first category', 'second category']) 

   
    const onAddCategory = ( category ) => {
        addCat([...categories, category ]) //los puntos son para clonar los valores del arreglo categories a uno nuevo
    }
    
    
    return (
    <>
    <h1>GifExpert</h1>
    <AddCategory onAddCategory={onAddCategory} /> { /* Prop, con esto el padre manda al hijo */ }
    <ol>
        {
        categories.map(
            (category, key) => 
            {
            return <GifGrid category={ category} key={key}/> 
            }
        )
        }
    </ol>
    
    </>
  )
}