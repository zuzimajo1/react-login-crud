import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { SideBarNavs } from '../config/types';
import { Home } from '../pages';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                {SideBarNavs.map((items, index) => (
                        <Route key={index} path={items.to} element={items.element} />
                    ))}
            </Routes>
            <ToastContainer />
        </>
    )
}

export default AppRouter