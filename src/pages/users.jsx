import React, { useEffect } from 'react'
import { Button, Table } from '../components'
import * as HiIcon from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { GetAllUsers } from '../helpers/api';

const users = () => {
  return (
    <main className='user-header-main'>
      <HeaderUser />
      <Table/>
    </main>
  )
}



const HeaderUser = () => {
  const dispatch = useDispatch();

  useEffect( ()=>{
    const getall = async () =>{
      try {
        const res = await GetAllUsers();
        console.log(res);
      } catch (error) {

      }
    }

    getall();


   
  },[dispatch])


  return (
    <div className='user-header-wrapper'>
      <h2>Users</h2>
      <Button className="insert-button" text="Invite User" icon Icon={HiIcon.HiPlus} Iconclassname="insert-button-icon" />
    </div>
  )
}

export default users