import React, { useState } from 'react'
import './card.css'

function Card({props}) {
    // const [edit, setEdit]= useState(false)

    const {title, firstName, middleName,lastName, staffId, password, userName, department, employmentStatus } = props
  return (
    <div className='card box-shadow'>
            <div className="data-field">
                <h3>Title</h3>
                <p>{title}</p>
            </div>

            <div className='data-field'>
                <h3>First Name</h3>
                <p>{firstName}</p>
            </div>

            {
                middleName ? (
                <div className="data-field">
                    <h3>Middle Name</h3>
                    <p>{middleName}</p>
                </div>
                ) : ('')
            }

            <div className='data-field'>
                <h3>Last Name</h3>
                <p>{lastName}</p>
            </div>

        <div className="data-field">
            <h3>Username</h3>
            <p>{userName}</p>
        </div>

        <div className="data-field">
            <h3>Department</h3>
            <p>{department}</p>
        </div>

        <div className="data-field">
            <h3>Employment Type</h3>
            <p>{employmentStatus}</p>
        </div>

        {
            staffId ? (
                <div className="data-field">
                    <h3>Staff ID</h3>
                    <p>{staffId}</p>
                </div>

            ): ('')
        }
        
        {/* password */}
        <div className="data-field">
            <h3>Password</h3>
            <p>{password}</p>
        </div>

        <div className="option-controls">
           <button className="btn edit">
            Edit
           </button>
           <button className="btn delete">
            Delete
           </button>
           <button className="btn save">
            Save
           </button>
        </div>
    </div>
  )
}

export default Card