//import './App.css'

import PropTypes from 'prop-types'; 
import { useState } from "react"; 
import { useCounter } from './components/useCounter';

const title = 'First App'

// const FirstApp = (props) => {
//   return (
//   <> 
//   <h1> {props.title} </h1>
//   <span> span sample  </span> 
//   </>
//   )
// }

//export default FirstApp   

//  const FirstApp = ({title, sum}) => {
//   return (
//     <>
//     <h1> { title } </h1>
//     <span> {sum} </span>
//     </>
//   )
// }

// FirstApp.propTypes = {
//   title: PropTypes.string.isRequired,
//   sum: PropTypes.number.isRequired
// }

// FirstApp.defaultProps = {
//   title: 'No hay título',
//   sum: 300
// }


// export default FirstApp   

// const FirstApp = ({value}) => {
//   const handleAdd = () => {
    
//     value++ 
//     console.log('Calling handleAdd', value)
//   }

//   return (
//     <>
//     <h1> Counter </h1>
//     <span> { value } </span>
//     <button onClick={() => handleAdd()}> + 1 </button>
//     </>
//   )
// }
// export default FirstApp  


const FirstApp = ({value}) => {
  const{counter,
    handleAdd,
    handleSubstract,
    handleReset} = useCounter(value)

 

  return (
    <>
    <h1> Counter </h1>
    <span> { counter } </span>
    <button onClick={() => handleAdd(3)}> +1  </button> 
    <button onClick={() => handleSubstract()}> -1  </button>
    <button onClick={() => handleReset()}> Reset  </button>
    </>
  )
}
export default FirstApp  