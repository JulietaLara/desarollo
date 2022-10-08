import './App.css'
import { MainApp } from './components/MainApp'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/slices/counterSlice'; 

export const App = () => {

  // const { counter } = useSelector(state => state.counter); 
  // const dispatch = useDispatch(); 
  return (
  <> 
  {/* <h2> Bienvenide  </h2> 
  <MainApp /> */}
  <hr />
  {/* <span> Counter is: {counter} </span>
  <button
    className='btn btn-primary'
    onClick={() => dispatch(increment())}>
    +1
  </button> */}
  <h1> Hola Terricola </h1>
  <h2> Bienvenide  </h2> 
  //<MainApp />
  </>
  )
}

export default App  
