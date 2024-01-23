import React from 'react'
import './datarow.css'

function DataRow({ firstName, lastName, password, status }) {
    return (
        <tr>
            <td>Mr Aaron Gordon</td>
            <td>G.AARON</td>
            <td>password123</td>
            <td><span class="status pending">Pending</span></td>
        </tr>
    )
}

export default DataRow