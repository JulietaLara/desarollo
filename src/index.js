import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirstApp from './FirstApp'
import {ComponentApp} from './components/ComponentApp'
import { Father } from './components/Father';
import { TodoApp } from './components/TodoApp';
import { BrowserRouter} from "react-router-dom";
// import {provider} from './10-redux/store/store';
// import {Registro} from './10-redux/store/store';
//import {Registro} from "./components/Registro"

// import reportWebVitals from './reportWebVitals';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   {/*<App />
    <FirstApp value={1} />
    <ComponentApp />
    <Father/> */}
    {/* <TodoApp/> */}
    
    <BrowserRouter>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"></link> 
    <App />
    
    </BrowserRouter>
  </>
    
);
//import './components/introReducer'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

