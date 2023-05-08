import React from 'react'
import './index.css';

import { Prueba } from './components/Prueba'
import { Navbar } from './components/Navbar'
import { Alerts } from './components/Alerts';

const App = () => {
  return (
    <div>
      <Navbar />
      <Prueba />
      <Alerts />
      <h1 className='fondoRojo'>Hola Mundo</h1>
      <p>Texto texto</p>      
    </div>
  )
}

export default App
