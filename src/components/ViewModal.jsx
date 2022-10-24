import React from 'react'
import * as AiIcon from "react-icons/ai";

const ViewModal = ({ modalOpen, email, firstname, lastname, status, role }) => {
    return (
        <div className='view-modal' >
            <div className='centered'>
                <div className='view-modal-wrapper'>
                    <button onClick={()=> modalOpen(false)} ><AiIcon.AiOutlineClose size={25} /></button>
                    <div className='view-content'>
                        <h2>View</h2>
                        <p>Email: <span>{email}</span></p>
                        <p>Name: <span>{firstname} {lastname}</span></p>
                        <p>Status: <span>{status}</span></p>
                        <p>Role: <span>{role}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewModal