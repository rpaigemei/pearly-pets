import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Pets from './pages/Pets/Pets';
import Resources from './pages/Resources/Resources';
import Favorites from './pages/Favorites/Favorites';

import './pages/pages.css';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Fragment>
  );
}

export default App;
