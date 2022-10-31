import React, { useRef } from 'react'
import * as AiIcon from "react-icons/ai";
import { validateEmail } from '../helpers/utils';
import Button from './Button';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { CreateNewUser } from '../helpers/api';
import { AddUser } from '../redux/reducers/usersRedux';


const CreateModal = ({ modalOpen }) => {
    const dispatch = useDispatch();
    const firstname = useRef();
    const lastname = useRef();
    const password = useRef();
    const status = useRef();
    const role = useRef();
    const email = useRef();
   


    const handleCreate = async (e) => {
        e.preventDefault();
        if (validateEmail(email.current.value)) return toast.warn("Invalid Email");
        if (!firstname.current.value || !lastname.current.value || !password.current.value || !status.current.value || !role.current.value || !email.current.value){
            return toast.warn("Don't omit any details")
        }
            const createUserDetails = {
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                password: password.current.value,
                status: status.current.value,
                role: role.current.value,
                email: email.current.value,
            };

        try {
            const res = await CreateNewUser(createUserDetails);
            dispatch(AddUser(res));
            modalOpen(false)
            toast.success("Created Successfully")
        } catch (err) { 
            toast.error("Creation Failed")
        }
    }







return (
    <div className='edit-view-modal' >
        <div className='edit-centered'>
            <div className='edit-view-modal-wrapper'>
                <button className='close-button' onClick={() => modalOpen(false)}><AiIcon.AiOutlineClose size={25} /></button>
                <div className='edit-view-content'>
                    <h2>Create</h2>
                    <form className='edit-loginform' onSubmit={handleCreate}>
                        <div>
                            <label htmlFor='firstname' >Firstname</label>
                            <input type="text" ref={firstname} name="firstname" id="firstname"></input>
                        </div>
                        <div>
                            <label htmlFor='lastname'>Lastname</label>
                            <input type="text" ref={lastname} name="lastname" id="lastname"></input>
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type="text" ref={email} name="email" id="email"></input>
                        </div>
                        <div>
                            <label htmlFor='status'>Password</label>
                            <input type="password" ref={password} name="password" id="password"></input>
                        </div>
                        <div>
                            <label htmlFor='status'>Status</label>
                            <input type="text" ref={status} name="status" id="status"></input>
                        </div>
                        <div>
                            <label htmlFor='role'>Role</label>
                            <input type="text" ref={role} name="role" id="role"></input>
                        </div>
                        <Button className='button-login' text='Create' />
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default CreateModal