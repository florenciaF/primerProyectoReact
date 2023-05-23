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

      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
