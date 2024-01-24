import React from 'react'
import './recentrequests.css'
import Table from '../Table/Table'
import { Link } from 'react-router-dom'

function RecentRequest({ data }) {
    return (
        <div className="recentRequests">
            <div className="cardHeader">
                <h2>Account Requests</h2>
                <Link to={'/allUser'} className="btn">View All</Link>
            </div>
            <Table data={data} />
        </div>
    )
}

export default RecentRequest