import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from './auth/auth';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './components/Login/Login';
import Pets from './pages/Pets/Pets';
import Resources from './pages/Resources/Resources';
import Notification from './components/Notification/Notification';

import './pages/pages.css';

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const showLogin = useSelector((state) => state.ui.showLogin);
  const userFavorites = useSelector((state) => state.user.userFavorites);

  useEffect(() => {
    if(userFavorites?.length) {
      localStorage.setItem('favoritePets', JSON.stringify(userFavorites));
    }
  }, [userFavorites]);

  useEffect (() =>{
    dispatch(checkLogin());
  }, []);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
      <div className='login-outer'>
        {showLogin && <Login />}
      </div>
    </Fragment>
  );
}

export default App;
