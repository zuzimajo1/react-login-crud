import React, { useEffect , useState} from 'react'
import { Button, CreateModal, Table } from '../components'
import * as HiIcon from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { GetAllUsers } from '../helpers/api';
import { RetrievedAllUser } from '../redux/reducers/usersRedux';

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
  const [createModal, setcreateModal] = useState(false);

  useEffect( ()=>{
    const getall = async () =>{
      try {
        const res = await GetAllUsers();
        console.log(res);
        dispatch(RetrievedAllUser(res));

      } catch (error) {

      }
    }
    getall();
  },[dispatch])


  return (
    <div className='user-header-wrapper'>
      <h2>Users</h2>
      <Button className="insert-button" text="Invite User" icon Icon={HiIcon.HiPlus} click={() => setcreateModal(true) } Iconclassname="insert-button-icon" />
      {createModal && <CreateModal modalOpen={setcreateModal}/>}
    </div>
  )
}

export default users