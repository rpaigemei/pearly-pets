import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Pets from './pages/Pets/Pets';
import Resources from './pages/Resources/Resources';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
