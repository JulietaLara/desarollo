
import { useState } from "react";
export const useCounter = (value) => {
    const [counter, setCounter ] = useState (value); 
    

    const handleAdd = (value1 = 1) => { // si value1 no tiene ningun valor, tomara por defecto 1 

       setCounter(counter + value1)
    }
    const handleSubstract = (value1 = 1) => {
        if(counter > 0){
            setCounter(counter - value1)
        } else {
            return;
        }
        
    }
    const handleReset = () => {
      setCounter(value)
    }

    return{
        counter,
        handleAdd,
        handleSubstract,
        handleReset
    }
} 