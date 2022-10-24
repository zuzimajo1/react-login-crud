import React from 'react'
import * as AiIcon from "react-icons/ai";
import Button from './Button';

const CreateModal = ({ modalOpen }) => {
    return (
        <div className='edit-view-modal' >
            <div className='edit-centered'>
                <div className='edit-view-modal-wrapper'>
                    <button className='close-button' onClick={() => modalOpen(false)}><AiIcon.AiOutlineClose size={25} /></button>
                    <div className='edit-view-content'>
                        <h2>Create</h2>
                        <form className='edit-loginform'>
                            <div>
                                <label htmlFor='firstname'>Firstname</label>
                                <input type="text"  name="firstname" id="firstname"></input>
                            </div>
                            <div>
                                <label htmlFor='lastname'>Lastname</label>
                                <input type="text" name="lastname" id="lastname"></input>
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input type="text" name="email" id="email"></input>
                            </div>
                            <div>
                                <label htmlFor='status'>Password</label>
                                <input type="password"  name="password" id="password"></input>
                            </div>
                            <div>
                                <label htmlFor='status'>Status</label>
                                <input type="text"  name="status" id="status"></input>
                            </div>
                            <div>
                                <label htmlFor='role'>Role</label>
                                <input type="text"  name="role" id="role"></input>
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