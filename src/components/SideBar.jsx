import React from 'react'
import LMCLogo2 from "../assets/LMCLogo2.svg"
import User from './User'
import { NavLink } from 'react-router-dom'
import { SideBarNavs } from '../config/types'

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
            {SideBarNavs.map((items, index)=>(
                <li className='sidebar-list' key={index}><NavLink  className={({isActive})=> isActive ? "sidebar-active" : "sidebar-inactive" }  to={items.to}>{items.Icon}{items.name}</NavLink></li>
            ))}
        </ul>
    </nav>
)


export default SideBar