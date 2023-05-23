import React from 'react'
import { Alerts } from './Alerts'
import { Card } from './Card'

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <h1 className='fondoRojo'>Hola Mundo</h1>


      <h2>Props</h2>
      <Alerts titulo='Titulo de alerta 1'
              tipo='alert alert-primary'
      />

      <Alerts titulo='Titulo 2'
              tipo='alert alert-secondary' 
      /> 

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
        <div className='col-md-3'>
          <Card 
            imagen='bootstrap.png'
            titulo='Bootstrap'
            descripcion='Descripción de bootstrap.......'
          /> 
        </div>
      </div>     
    </div>
  )
}
