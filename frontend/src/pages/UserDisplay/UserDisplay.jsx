import './userdisplay.css';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import UserEditable from '../../components/UserEditable/UserEditable';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getAllUser } from '../../features/auth/authReducer';
import Spinner from '../../components/Spinner/Spinner';


function UserDisplay() {
    // const [user, setUser] = useState(null)
    const location = useLocation();
    const userId = location.state.userId;

    return (
        <div className='users-display'>
            <div className="user-display-header">
                <h1>User Information</h1>
                <p>Review and update</p>
            </div>

            <UserEditable id={userId} />
        </div>
    )
}

export default UserDisplay