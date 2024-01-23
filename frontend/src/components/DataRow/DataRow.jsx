import React from 'react'
import './datarow.css'

function DataRow({ user }) {
    const { title, firstName, middleName, userName, status, lastName, password } = user
    console.log(user)
    return (
        <tr>
            <td>{title} {firstName} {middleName?.length > 0 && middleName} {lastName}</td>
            <td>{userName}</td>
            <td>{password}</td>
            <td><span className={`status ` + status}>Pending</span></td>
        </tr>
    )
}

export default DataRow