import React, { useState } from 'react'
import {updateUser} from '../../features/auth/authReducer'
import {useDispatch} from 'react-redux'
import './card.css'
import { toast } from 'react-toastify'


function Card({props}) {
    const [edit, setEdit]= useState(false)
    
    const dispatch = useDispatch()

    const {title, firstName, middleName,lastName, staffId, password, userName, department, employmentStatus, status, _id} = props

    console.log(_id)
    
     const [userData, setUserData] = useState({
        title,
        firstName,
        lastName,
        middleName,
        staffId,
        password,
        userName,
        department,
        employmentStatus
    })

    const handleChange = function(e){
        setUserData({...userData, id: _id, [e.target.name]: e.target.value})
    }

    const handleEdit = function(){
        setEdit(true)
        setUserData({...userData, id: _id})
        toast.info('Ready to edit now.')
    }

    const handleComplete = function(){
        dispatch(updateUser({id: _id, status: true}))
    }

    const handleSave = function(){
        toast.info('changes successful')
        dispatch(updateUser(userData))
        console.log(userData)
        setEdit(false)
    }
    
    
    let content;

    if(edit){
        content = (<>
            
            <div className="data-field">
                <h3>Title</h3>
                <input type='text' name='title' value={userData.title} onChange={handleChange}/>
            </div>

            <div className='data-field'>
                <h3>First Name</h3>
                <p>{firstName}</p>
                <input type='text' name='firstName' value={userData.firstName} onChange={handleChange}/>
            </div>

            {
                middleName ? (
                <div className="data-field">
                    <h3>Middle Name</h3>
                    <p>{middleName}</p>
                <input type='text' name='middleName' value={userData.middleName} onChange={handleChange}/>

                </div>
                ) : ('')
            }

            <div className='data-field'>
                <h3>Last Name</h3>
                <input type='text' name='lastName' value={userData.lastName} onChange={handleChange}/>
            </div>

        <div className="data-field">
            <h3>Username</h3>
                <input type='text' name='userName' value={userData.userName} onChange={handleChange}/>
        </div>

        <div className="data-field">
            <h3>Department</h3>
                <input type='text' name='department' value={userData.department} onChange={handleChange}/>
        </div>

        <div className="data-field">
            <h3>Employment Type</h3>
                <input type='text' name='employmentStatus' value={userData.employmentStatus} onChange={handleChange}/>
        </div>

        {
            staffId ? (
                <div className="data-field">
                    <h3>Staff ID</h3>
                    <input className='form-control' type='text' name='staffId' value={userData.staffId} onChange={handleChange}/>
                </div>

            ): ('')
        }
        
        {/* password */}
        <div className="data-field">
            <h3>Password</h3>
            <input type='text' name='password' value={userData.password} onChange={handleChange}/>
        </div>
        </>)
    }else{
        content = (<>
            <div className="data-field">
                <h3>Account Status</h3>
                {
                    status === true ? (<>
                        <p className='success'>Active</p>
                    </>) : (<>
                        <p className='pending'>Pending </p>
                    </>)
                }
            </div>

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
        </>)
    }

  return (
    <div className='card box-shadow'>

        {content}
            {/* <div className="data-field">
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
        } */}
        
        {/* password */}
        {/* <div className="data-field">
            <h3>Password</h3>
            <p>{password}</p>
        </div> */}

        <div className="option-controls">
            {
                edit ? (
                <>
                    <button className='btn box-shadow' onClick={handleSave}>Save</button>
                </>) : (
                    <>
                    <button className='btn box-shadow' onClick={handleEdit}>Edit</button>
                    </>
                )
            }
            <button className='btn' onClick={handleComplete}>Completed Registration</button>
        </div>
    </div>
  )
}

export default Card