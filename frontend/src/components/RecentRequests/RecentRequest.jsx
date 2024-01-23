import React from 'react'
import './recentrequests.css'
import Table from '../Table/Table'

function RecentRequest() {
    return (
        <div class="recentRequests">
            <div class="cardHeader">
                <h2>Account Requests</h2>
                <a href="#" class="btn">View All</a>
            </div>
            <Table />
        </div>
    )
}

export default RecentRequest