import {useState} from "react"

export const AddCategory = ({onAddCategory}) => { { /* al ser enviado con un prop lo debe recibir*/ }

    
    const [cat, setCat] = useState('') // el use state es para poder imprimir en html
    

    const onSetCategory = (event) => {
        setCat(event.target.value)
    }
   
    return (
    <>
    
    <input type="text" onChange={(event) => onSetCategory(event)} value={cat}/>   
    <button onClick={() => onAddCategory(cat)}> Add new category  </button>
    
    </>
  )
}

