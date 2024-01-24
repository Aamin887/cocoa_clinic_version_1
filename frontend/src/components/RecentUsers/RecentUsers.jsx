import React from 'react'
import './recentusers.css'


const DataItem = function ({ user }) {
    return (
        <tr>
            <td width="60px">
                <div className="imgBx"><img src="/" alt="" /></div>
            </td>
            <td>
                <h4>{user?.userName} <br /> <span>{user?.department}</span></h4>
            </td>
        </tr>
    )
}



function RecentUsers({ data }) {
    return (
        < div className="recentUsers" >
            <div className="cardHeader">
                <h2>Recent Users</h2>
            </div>
            <table>
                <tbody>
                    {
                        data?.map((user, idx) => <DataItem key={idx} user={user} />)
                    }
                </tbody>
            </table>
        </div >
    )
}

export default RecentUsers





{/* <tr>
                        <td width="60px">
                            <div className="imgBx"><img src="imgs/60039275-young-male-cartoon-profile-vector-illustration-graphic-design.jpg" alt="" /></div>
                        </td>
                        <td>
                            <h4>A.ISSAH <br /> <span>Doctor</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div className="imgBx"><img src="imgs/60039275-young-male-cartoon-profile-vector-illustration-graphic-design.jpg" alt="" /></div>
                        </td>
                        <td>
                            <h4>G.AARON <br /> <span>ISU</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div className="imgBx"><img src="imgs/60039275-young-male-cartoon-profile-vector-illustration-graphic-design.jpg" alt="" /></div>
                        </td>
                        <td>
                            <h4>C.JOHN <br /> <span>Nursing</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div className="imgBx"><img src="imgs/60039275-young-male-cartoon-profile-vector-illustration-graphic-design.jpg" alt="" /></div>
                        </td>
                        <td>
                            <h4>A.JOHN <br /> <span>Security</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div className="imgBx"><img src="imgs/60039275-young-male-cartoon-profile-vector-illustration-graphic-design.jpg" alt="" /></div>
                        </td>
                        <td>
                            <h4>L.KWESI <br /> <span>Security</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div className="imgBx"><img src="imgs/60039275-young-male-cartoon-profile-vector-illustration-graphic-design.jpg" alt="" /></div>
                        </td>
                        <td>
                            <h4>S.ANNAM <br /> <span>Stores</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div className="imgBx"><img src="imgs/60039275-young-male-cartoon-profile-vector-illustration-graphic-design.jpg" alt="" /></div>
                        </td>
                        <td>
                            <h4>Y.YAHAYA <br /> <span>Claims</span></h4>
                        </td>
                    </tr>
                    <tr>
                        <td width="60px">
                            <div className="imgBx"><img src="imgs/60039275-young-male-cartoon-profile-vector-illustration-graphic-design.jpg" alt="" /></div>
                        </td>
                        <td>
                            <h4>K.NANA <br /> <span>ISU</span></h4>
                        </td>
                    </tr> */}