import React from 'react'
import UserImage from './UserImage'

const User = ({name, role}) => (
    <div className='user-wrapper'>
        <UserImage className='user-image'  />
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    </div>
  )


export default User