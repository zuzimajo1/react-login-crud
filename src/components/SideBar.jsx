import React from 'react'
import LMCLogo2 from "../assets/LMCLogo2.svg"
import User from './User'
import { NavLink } from 'react-router-dom'
import * as ROUTE from "../constants/routes";
import * as HiIcon from "react-icons/hi";
import * as BsIcon from "react-icons/bs";
import * as ImIcon from "react-icons/im";
import * as GoIcon from "react-icons/go";
import * as AiIcon from "react-icons/ai";
import * as CgIcon from "react-icons/cg";
import * as MdIcon from "react-icons/md";


const SideBar = () => {
  return (
    <aside className='aside-container'>
        <img className='logo' src={LMCLogo2} alt="LMCLogo"></img>
        <UserContainer/>
        <SideBarNavigation/>
    </aside>
  )
}

const UserContainer = ()=>(
    <div className='user-container'>
        <User name='User A' role='Admin' /> 
    </div>
)


const SideBarNavigation = ()=>(
    <nav className='sidebar-navigation'>
        <ul>
            <li className='sidebar-list'><NavLink exact="true" className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.HOME}><HiIcon.HiDesktopComputer size={23} className="sidebar-icon" />Dashboard</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.CAREER_PATH}><BsIcon.BsBarChartLine size={23} className="sidebar-icon" />Career Path</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.LEARNING_COURSES}><ImIcon.ImBook size={23} className="sidebar-icon" />Learning Courses</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.ASSESSMENTS}><HiIcon.HiOutlineSearch size={23} className="sidebar-icon" />Assessments</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.MODULE_LIBRARY}><GoIcon.GoFileSubmodule size={23} className="sidebar-icon" />Module Library</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.TEAMS}><AiIcon.AiOutlineTeam size={23} className="sidebar-icon" />Teams</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.USERS}><AiIcon.AiOutlineUser size={23} className="sidebar-icon" />Users</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.REPORTS}><HiIcon.HiDocumentReport size={23} className="sidebar-icon" />Reports</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.PROFILE}><CgIcon.CgProfile size={23} className="sidebar-icon" />Profile</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.HELP_AND_FEEDBACK}><MdIcon.MdLiveHelp size={23} className="sidebar-icon" />Help and Feeback</NavLink></li>
            <li className='sidebar-list'><NavLink className={({ isActive }) => isActive ? "sidebar-active" : "sidebar-inactive"} to={ROUTE.WHATS_NEW}><AiIcon.AiFillNotification size={23} className="sidebar-icon" />What's New</NavLink></li>
        </ul>
    </nav>
)


export default SideBar