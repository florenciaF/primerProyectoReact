import React from 'react'
import './index.css';

import { Prueba } from './components/Prueba'
import { Navbar } from './components/Navbar'
import { Alerts } from './components/Alerts';
import { Card } from './components/Card';

const App = () => {
  return (
    <div>
      <Navbar />
      <Prueba />
      <Alerts />
      <h1 className='fondoRojo'>Hola Mundo</h1>
      <p>Texto texto</p>    
      <hr />

    {/* Props: informacion que viaja entre componentes */}
      <div className='row'>
        <div className='col-md-3'>
          <Card 
          imagen='git.png'
          titulo='Git Hub'
          descripcion='Descripción de git hub.......'
          />  
        </div>
        <div className='col-md-3'>
          <Card 
            imagen='react.png'
            titulo='React'
            descripcion='Descripción de react.......'
          /> 
        </div>
      </div>
    
    </div>
  )
}

export default App
