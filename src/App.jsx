import React, { StrictMode, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { SideBar } from './components';
import { Home, Login } from './pages';
import { LoginRouter } from './routers';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import { useSelector } from 'react-redux';

const App = () => {
  
  const { userLogin } = useSelector(state=>state?.auth)

  return (
    <>
      {userLogin ? <AppRouter /> : <LoginRouter />}
    </>
  );
}





export default App