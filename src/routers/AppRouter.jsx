import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { SideBarNavs } from '../config/types';
import { Home } from '../pages';
import { Header, SideBar } from '../components';

const AppRouter = () => {
    return (
        <main className='app-main'>
            <SideBar/>
            <div className='app-wrapper'>
            <Header/>
            <Routes>
                {SideBarNavs.map((items, index) => (
                    <Route key={index} path={items.to} element={items.element} />
                    ))}
            </Routes>
            <ToastContainer />
            </div>
        </main>
    )
}

export default AppRouter