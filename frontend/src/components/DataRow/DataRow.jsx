import React from 'react'
import './datarow.css'
import { useNavigate } from 'react-router-dom'


function DataRow({ user }) {
    const { title, firstName, middleName, userName, status, lastName, password } = user

    const navigate = useNavigate();

    const handleUserDisplay = function (id) {
        navigate('userdisplay', {
            state: {
                userId: id
            }
        })
    }

    return (
        <tr onClick={() => handleUserDisplay(user._id)}>
            <td>{title} {firstName} {middleName?.length > 0 && middleName} {lastName}</td>
            <td>{userName}</td>
            <td>{password}</td>
            <td><span className={`status ` + status}>Pending</span></td>
        </tr >
    )
}

export default DataRow