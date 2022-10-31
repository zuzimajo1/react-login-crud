import React, { useState } from 'react'
import * as AiIcon from "react-icons/ai";
import Button from './Button';
import { toast } from 'react-toastify';
import { UpdateUser } from '../helpers/api';
import { useDispatch } from 'react-redux';
import { UserUpdate } from '../redux/reducers/usersRedux';

const EditModal = ({ modalOpen, email, firstname, lastname, status, role, _id }) => {
    const [Data, setData] = useState();
    const dispatch = useDispatch();

    const AllFunctions = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...Data, [name]: value })
    }


    const handleEdit = async (e) => {
        e.preventDefault();
        if (Data) {
            try {
            const res = await UpdateUser(_id, {...Data });
            dispatch(UserUpdate(res))
            modalOpen(false);
            toast.success("Edited Successfully!")
            } catch (error) {
            toast.error("Edit Failed")
             }
        } else {
            return toast.warn("No changes made")
        }
    }




    return (
        <div className='edit-view-modal' >
            <div className='edit-centered'>
                <div className='edit-view-modal-wrapper'>
                    <button className='close-button' onClick={() => modalOpen(false)}><AiIcon.AiOutlineClose size={25} /></button>
                    <div className='edit-view-content'>
                        <h2>Update</h2>
                        <form className='edit-loginform' onSubmit={handleEdit}>
                            <div>
                                <label htmlFor='firstname'>Firstname</label>
                                <input type="text" placeholder={firstname} onChange={AllFunctions} name="firstname" id="firstname"></input>
                            </div>
                            <div>
                                <label htmlFor='lastname'>Lastname</label>
                                <input type="text" placeholder={lastname} onChange={AllFunctions} name="lastname" id="lastname"></input>
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input type="text" placeholder={email} onChange={AllFunctions} name="email" id="email"></input>
                            </div>
                            <div>
                                <label htmlFor='status'>Status</label>
                                <input type="text" placeholder={status} onChange={AllFunctions} name="status" id="status"></input>
                            </div>
                            <div>
                                <label htmlFor='role'>Role</label>
                                <input type="text" placeholder={role} onChange={AllFunctions} name="role" id="role"></input>
                            </div>
                            <Button className='button-login' text='Update' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal