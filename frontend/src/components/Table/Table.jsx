import React from 'react'
import './table.css'
import DataRow from '../DataRow/DataRow'

function Table() {
    return (
        <table>
            {/* header with column title */}
            <thead>
                <tr>
                    <td>Fullname</td>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Status</td>
                </tr>
            </thead>
            {/* body with rows  */}
            <tbody>
                <DataRow />
                <DataRow />
                {/* <DataRow />
                <DataRow />
                <DataRow />
                <DataRow />
                <DataRow />
                <DataRow />
                <DataRow />
                <DataRow /> */}
            </tbody>
        </table>
    )
}

export default Table