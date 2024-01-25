// UserDisplay.js
import React, { useEffect, useState } from 'react';
import './usereditable.css';
import { updateUser, getUser, getAllUser } from '../../features/auth/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';


const UserEditable = ({ id }) => {
    const { activeUser, isLoading, isSuccess } = useSelector(state => state.auth);
    const [userData, setUserData] = useState()

    const [isEditing, setIsEditing] = useState(false);

    const [editedUserData, setEditedUserData] = useState({});

    console.log(editedUserData)
    const dispatch = useDispatch();
    const navigate = useNavigate()



    useEffect(() => {
        dispatch(getUser(id))
        dispatch(getAllUser())
        setUserData(activeUser)
    }, [])

    console.log(userData)


    const handleEdit = () => {
        setEditedUserData(activeUser)
        setIsEditing(true);
    };


    const handleUpdate = () => {
        setIsEditing(false);
        dispatch(updateUser({ id, formData: editedUserData }));

    };



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if (isLoading) {
        dispatch(getUser(id))
        return (<Spinner />)
    }

    return (
        <div className='user-editable'>
            <Link to='/admin/dashboard' className='btn'>Dash</Link>
            {isEditing ? (
                <article className='page user-details'>
                    <div className="card-container">

                        <div className="data-field">
                            <small>Title</small>
                            <input
                                className='input-control'
                                type="text"
                                name='title'
                                value={editedUserData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="data-field">
                            <small>First Name</small>
                            <input
                                className='input-control'
                                type="text"
                                name='firstName'
                                value={editedUserData.firstName}
                                onChange={handleInputChange}
                            />
                        </div>
                        {
                            activeUser?.middleName &&
                            <div className="data-field">
                                <small>Middle Name</small>
                                <input
                                    className='input-control'
                                    type="text"
                                    name='middleName'
                                    value={editedUserData.middleName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        }
                        <div className="data-field">
                            <small>Last Name</small>
                            <input
                                className='input-control'
                                type="text"
                                name='lastName'
                                value={editedUserData.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        {
                            activeUser?.staffId &&
                            <div className="data-field">
                                <small>Staff ID</small>
                                <input
                                    className='input-control'
                                    type="text"
                                    name='staffId'
                                    value={editedUserData.staffId}
                                    onChange={handleInputChange}
                                />
                            </div>
                        }
                        <div className="data-field">
                            <small>Status</small>
                            <select name="status" id="" onChange={handleInputChange}>
                                <option value="pending">Pending</option>
                                <option value="active">Active</option>
                                <option value="rejected">Rejected</option>
                            </select>
                            {/* <input
                                className='input-control'
                                type="text"
                                name='status'
                                value={editedUserData.status}
                                onChange={handleInputChange}
                            /> */}
                        </div>
                        <div className="data-field">
                            <small>Employment Type</small>
                            <input
                                className='input-control'
                                type="text"
                                name='employmentStatus'
                                value={editedUserData.employmentStatus}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="data-field">
                            <small>Department</small>
                            <input
                                className='input-control'
                                type="text"
                                name='department'
                                value={editedUserData.department}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="data-field">
                            <small>Password</small>
                            <input
                                className='input-control'
                                type="text"
                                name='password'
                                value={editedUserData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="data-field">
                            <small>Username</small>
                            <input
                                className='input-control'
                                type="text"
                                name='userName'
                                value={editedUserData.userName}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* buttons  */}
                        <div className="buttons">
                            <button className="primary" onClick={handleUpdate}>Save Changes</button>
                            {/* <button className="primary ghost">Activate</button> */}
                        </div>
                    </div>
                </article>
            ) : (
                <article className='page user-details'>
                    <div className="card-container">

                        <div className="data-field">
                            <small>Title</small>
                            <h4>{activeUser?.title}</h4>
                        </div>
                        <div className="data-field">
                            <small>First Name</small>
                            <h4>{activeUser?.firstName}</h4>
                        </div>
                        {
                            activeUser?.middleName &&
                            <div className="data-field">
                                <small>Middle Name</small>
                                <h4>{activeUser.middleName}</h4>
                            </div>
                        }
                        <div className="data-field">
                            <small>Last Name</small>
                            <h4>{activeUser?.lastName}</h4>
                        </div>
                        {
                            activeUser?.staffId &&
                            <div className="data-field">
                                <small>Staff ID</small>
                                <h4>{activeUser?.staffId}</h4>
                            </div>
                        }
                        <div className="data-field">
                            <small>Status</small>
                            <h4>{activeUser?.status}</h4>
                        </div>
                        <div className="data-field">
                            <small>Employment Type</small>
                            <h4>{activeUser?.employmentStatus}</h4>
                        </div>
                        <div className="data-field">
                            <small>Department</small>
                            <h4>{activeUser?.department}</h4>
                        </div>
                        <div className="data-field">
                            <small>Password</small>
                            <h4>{activeUser?.password}</h4>
                        </div>
                        <div className="data-field">
                            <small>Username</small>
                            <h4>{activeUser?.userName}</h4>
                        </div>

                        {/* buttons  */}
                        <div className="buttons">
                            <button className="primary" onClick={handleEdit}>Update Details</button>
                            {/* <button className="primary ghost">Activate</button> */}
                        </div>
                    </div>
                </article>
            )
            }
        </div >
    );
};

export default UserEditable;


{/* <div class="skills">
                            <ul>
                                <li>UI / UX</li>
                                <li>Front End Development</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div> */}