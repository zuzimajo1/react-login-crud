import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages';
import { useSelector } from 'react-redux';
const LoginRouter = () => {
    const { userLogin } = useSelector(state => state.user);
  return (
    <main className='login-router-main'>
        <Login />
        <ToastContainer
          position='bottom-right'
          autoClose={2500}
          closeButton={true}
          newestOnTop={true} />
    </main>
  )
}

export default LoginRouter