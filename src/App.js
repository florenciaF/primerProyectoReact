import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar'
import { Login } from './components/Login';
import { Home } from './components/Home';

import './index.css';


const App = () => {
  return (
    <div>
      <Navbar />

      {/* <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-3'>
          <Card
            titulo='Titulo de prueba'
            texto='Texto de descripcion de card'
            imagen='bootstrap.png'
          />
        </div>
        <div className='col-md-3'>
          <Card
            titulo='Titulo de prueba n 2'
            texto='Texto de descripcion de card'
            imagen='git.png'
          />
        </div>
        <div className='col-md-3'>
          <Card
            titulo='Titulo de prueba'
            texto='Texto de descripcion de card'
            imagen='bootstrap.png'
          />
        </div>
      </div>  */}
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
