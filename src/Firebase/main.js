import React from 'react'
import { ReactDOM } from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import { Registro } from './10-redux/Registro'

// export default function main() {
//   return (
//     <div>main</div>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Registro /> 
    </BrowserRouter>
  </Provider>
)
