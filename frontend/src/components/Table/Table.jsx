import React from 'react'
import './table.css'
import DataRow from '../DataRow/DataRow'

function Table({ data }) {

    const list = data?.map((user, idx) => <DataRow key={idx} user={user} />);

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
                {list}
            </tbody>
        </table>
    )
}

export default Table