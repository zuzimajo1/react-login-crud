import React from 'react'
import Button from './Button'
import * as HiIcon from "react-icons/hi";
import * as IoIcon from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Logout } from '../redux/reducers/userRedux';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className='header-container'>
        <div>
        <Button className='header-switch-button' text='Switch to Trainee' icon Icon={HiIcon.HiOutlineSwitchHorizontal} Iconclassname='header-switch-icons' />
        <Button className='header-bell-button' icon Icon={HiIcon.HiOutlineBell} Iconclassname='header-icons' />
        <Button className='header-exit-button' icon Icon={IoIcon.IoExitOutline} Iconclassname='header-icons' click={() => dispatch(Logout())} />
        </div>
    </header>
  )
}

export default Header