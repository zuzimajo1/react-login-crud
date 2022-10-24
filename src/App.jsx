import React, { StrictMode, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { SideBar } from './components';
import { Home, Login } from './pages';
import { LoginRouter } from './routers';
import AppRouter from './routers/AppRouter';
import { useSelector } from 'react-redux';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.min.css';


const App = () => {
  const { userLogin } = useSelector(state => state?.auth);
  console.log(userLogin);
  return (
    <>
      {userLogin ? <AppRouter /> : <LoginRouter />}
    </>
  );
}





export default App