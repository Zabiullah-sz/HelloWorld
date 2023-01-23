import React from 'react';
import HelloWorld from './pages/HelloWorld';
import { Route, Routes } from 'react-router-dom';

import Contact from './pages/Contact';
import Vehicules from './pages/Vehicules';



function App() {
  return(
    <Routes>
    <Route path='/' element={<HelloWorld />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/vehicules' element={<Vehicules />} />
  </Routes>
  )
}

export default App;
