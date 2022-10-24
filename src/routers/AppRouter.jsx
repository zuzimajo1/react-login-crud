import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Assessments, CareerPath, Help_and_Feeback, Home, Learning_Courses, Module_Library, Profile, Reports, Teams, Users, Whats_New } from '../pages';
import { Header, SideBar } from '../components';
import * as ROUTE from "../constants/routes";
import { useSelector } from 'react-redux';
const AppRouter = () => {
    const {isAdmin} = useSelector(state => state?.auth?.user);
    
    return (
        <main className='app-main'>
            <SideBar/>
            <div className='app-wrapper'>
            <Header/>
            <Routes>
                    <Route exact path={ROUTE.HOME} element={<Home/>}/>  
                    <Route path={ROUTE.CAREER_PATH} element={<CareerPath />}/>
                    <Route path={ROUTE.LEARNING_COURSES} element={<Learning_Courses/>}/>
                    <Route path={ROUTE.ASSESSMENTS} element={<Assessments/>}/>
                    <Route path={ROUTE.MODULE_LIBRARY} element={<Module_Library/>}/>
                    <Route path={ROUTE.TEAMS} element={<Teams/>}/>
                    <Route path={ROUTE.USERS} element={isAdmin ? <Users/> : <Navigate to="/"/> }/>
                    <Route path={ROUTE.REPORTS} element={<Reports/>}/>
                    <Route path={ROUTE.PROFILE} element={<Profile/>}/>
                    <Route path={ROUTE.HELP_AND_FEEDBACK} element={<Help_and_Feeback/>}/>
                    <Route path={ROUTE.WHATS_NEW} element={<Whats_New/>}/>
            </Routes>
                <ToastContainer position='bottom-right'
                    autoClose={2500}
                    closeButton={true}
                    newestOnTop={true} />
            </div>
        </main>
    )
}

export default AppRouter