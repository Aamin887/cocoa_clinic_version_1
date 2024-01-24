// UserDisplay.js
import React, { useState } from 'react';
import './usereditable.css';

const UserEditable = ({ user, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedUserData, setEditedUserData] = useState({ ...user });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        onUpdate(editedUserData);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='user-editable'>
            {isEditing ? (
                <div className='editable-form'>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={editedUserData.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={editedUserData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            ) : (
                <article className='page user-details'>
                    <div className="content">
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                </article>
            )}
        </div>
    );
};

export default UserEditable;
