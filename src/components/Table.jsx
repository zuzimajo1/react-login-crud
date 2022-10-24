import React, { useState } from 'react';
import DataTable from "react-data-table-component";
import Userimage from "../assets/user-default2.svg";
import View from "../assets/view.svg";
import Edit from "../assets/edit.svg";
import Delete from "../assets/trash.svg";
import Modal from './ViewModal';
import EditModal from './EditModal';

const customStyles = {
    headCells:{
        style: {
            backgroundColor: '#5087C7',
            color: 'white',
        }
    },
    cells: {
        style: {
            padding: '1px 0',
           
        },
    },
  
}
const Table = () => {
    const [openModalView, setopenModalView] = useState(false);
    const [openModalUpdate, setopenModalUpdate] = useState(false);
    const [UserData, setUserData] = useState();


    const sampledata = [
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",

        },
        {
            firstname: "Zuzim2",
            lastname: "Ajo2",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim3",
            lastname: "Ajo3",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim4",
            lastname: "Ajo4",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim5",
            lastname: "Ajo5",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
         {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
        {
            firstname: "Zuzim",
            lastname: "Ajo",
            email: "ajozuzim@gmail.com",
            status: "Active",
            role: "Trainee",
        },
    ]



    //Table Configs
    const usersColumn = [
        {
            name: "Email",
            minWidth: "250px",
            cell: (row) => {
                return(
                    <div className='email-table'>
                        <img src={Userimage} alt="userimage" />
                        <p>{row.email}</p>
                    </div>
                )
            }
        },
        {
            name: "Name",
            center: true,
            cell: (row)=>{
                return(
                    <div>
                        <p>{row.firstname} {row.lastname}</p>
                    </div>
                )
            }
        },
        {
            name: "Status",
            center: true,
            selector: (row) => row.status,

        },
        {
            name: "Role",
            center: true,
            selector: (row) => row.role,
        },
        {
            name: "View",
            center: true,
            cell: (row) =>{
                return(
                    <button className='actions-button' onClick={()=>{
                        setopenModalView(true);
                        setUserData(row);
                    }} ><img src={View} alt="View"/></button>
                )
            }
        },
        {
            name: "Update",
            center: true,
            cell: (row)=>{
                return(
                    <button className='actions-button' onClick={()=>{
                        setopenModalUpdate(true);
                        setUserData(row);
                    }}><img className='actions-svg' src={Edit} alt="Edit" /></button>
                )
            }
        },
        {
            name: "Delete",
            center: true,
            cell: (row)=>{
                return(
                    <button className='actions-button'><img className='actions-svg' src={Delete} alt="Delete" /></button>
                )
            }
        }
    ]




  return (
      <div className='table-main' >
        <div className='table-input'>
            <input className='table-input-first' placeholder='Name' />
            <input className='table-input-second' type='text' placeholder='Search...' />
        </div>
        <DataTable
        columns={usersColumn}
        data={sampledata}
        pagination
        highlightOnHover
        pointerOnHover
        responsive
        customStyles={customStyles}
        dense
        />
          {
            openModalView && <Modal {...UserData} modalOpen={setopenModalView} />

          }
          {
            openModalUpdate && <EditModal {...UserData} modalOpen={setopenModalUpdate} />
          }
    </div>
  )
}

export default Table