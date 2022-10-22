import React, {StrictMode, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { SideBar } from './components';
import { SideBarNavs } from './config/types';
import { Home, Login } from './pages';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const App = () => {
  const [User, setUser] = useState(true);
  return (
    <StrictMode>
    {User ? <AppRouter /> : <Login />}
    </StrictMode>
  );
}





export default App