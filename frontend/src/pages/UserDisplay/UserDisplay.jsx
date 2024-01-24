import './userdisplay.css';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import UserEditable from '../../components/UserEditable/UserEditable';

function UserDisplay() {
    const location = useLocation();
    const userId = location.state.userId;

    const initialUserData = {
        name: 'John Doe',
        email: 'john@example.com',
    };

    const [userData, setUserData] = useState(initialUserData);

    const handleUpdateUser = (updatedUserData) => {
        setUserData(updatedUserData);
    };

    return (
        <div className='users-display'>
            <div className="user-display-header">
                <h1>User Information</h1>
                <p>Review and update</p>
            </div>

            <UserEditable user={userData} onUpdate={handleUpdateUser} />
        </div>
    )
}

export default UserDisplay