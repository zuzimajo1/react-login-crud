import React from 'react'
import * as AiIcon from "react-icons/ai";
import Button from './Button';

const EditModal = ({ modalOpen, email, firstname, lastname, status, role }) => {
  return (
      <div className='edit-view-modal' >
          <div className='edit-centered'>
              <div className='edit-view-modal-wrapper'>
                  <button onClick={()=> modalOpen(false)}><AiIcon.AiOutlineClose size={25} /></button>
                  <div className='edit-view-content'>
                      <h2>Update</h2>
                      <form className='edit-loginform'>
                          <div>
                              <label htmlFor='firstname'>Firstname</label>
                              <input type="text" placeholder={firstname} name="firstname" id="firstname"></input>
                          </div>
                          <div>
                              <label htmlFor='lastname'>Lastname</label>
                              <input type="text" placeholder={lastname} name="lastname" id="lastname"></input>
                          </div>
                          <div>
                              <label htmlFor='email'>Email</label>
                              <input type="text" placeholder={email} name="email" id="email"></input>
                          </div>
                          <div>
                              <label htmlFor='status'>Status</label>
                              <input type="text" placeholder={status} name="status" id="status"></input>
                          </div>
                          <div>
                              <label htmlFor='role'>Role</label>
                              <input type="text" placeholder={role} name="role" id="role"></input>
                          </div>
                          {/* <Button className='button-login' text='Update' /> */}
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default EditModal