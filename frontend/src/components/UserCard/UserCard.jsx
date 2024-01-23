import './usercard.css'

function UserCard({ props }) {
    const { title, firstName, middleName, lastName, staffId, password, userName, department, employmentStatus, status, createdAt, updatedAt } = props

    return (
        <article className='user-card box-shadow'>
            <table className='user-info'>
                <thead>
                    <tr>
                        <td colSpan={2}>
                            <h3>
                                Details
                            </h3>
                        </td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='title'>Assigned Username</td>
                        <td>{userName}</td>
                    </tr>
                    <tr>
                        <td className='title'>Assigned Password</td>
                        <td>{password}</td>
                    </tr>

                    <tr>
                        <td className='title'>Status</td>
                        <td>{status}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className='title'>Created on</td>
                        <td>{new Date(createdAt).toLocaleString('en-UK')}</td>
                    </tr>
                    <tr>
                        <td className='title'>Updated on</td>
                        <td>{new Date(updatedAt).toLocaleString('en-UK')}</td>
                    </tr>
                </tfoot>
            </table>
        </article >
    )
}

export default UserCard



// < table className = "content" >
//             <div className="header">
//                 <div className="status">
//                     <h3>Account Status:</h3>
//                     {
//                         status === true ? (
//                             <>
//                                 <span className='state active'>
//                                     Active
//                                 </span>
//                             </>) : (
//                             <>
//                                 <span className='state pending'>
//                                     Pending
//                                 </span>
//                             </>
//                         )
//                     }
//                 </div>

//                 <div className="basic-info">
//                     <h3>Welcome</h3>
//                     <p>
//                         <span className='title'>{title}</span>
//                         <span className='firstName'>{firstName}</span>
//                         {
//                             middleName ? (
//                                 <span className='middleName'>{middleName}</span>
//                             ) : ('')
//                         }
//                         <span className='lastName'>{lastName}</span>
//                     </p>
//                 </div>
//             </div>

//             <div className="body">

//                 <div className="col">
//                     <div className="data-field">
//                         <h3>Username</h3>
//                         <p>{userName}</p>
//                     </div>

//                     <div className="data-field">
//                         <h3>Department</h3>
//                         <p>{department}</p>
//                     </div>

//                     <div className="data-field">
//                         <h3>Employment Type</h3>
//                         <p>{employmentStatus}</p>
//                     </div>
//                 </div>

//                 <div className="col">

//                     <div className="data-field">
//                         <h3>Password</h3>
//                         <p>{password}</p>
//                     </div>

//                     {
//                         staffId ? (
//                             <div className="data-field">
//                                 <h3>Staff ID</h3>
//                                 <p>{staffId}</p>
//                             </div>
//                         ) : ('')
//                     }

//                 </div>
//             </div>
//             <div className="footer">
//                 <div className="info">
//                     <h4>
//                         Created on:
//                     </h4>
//                     <p className='lead'>
//                         {new Date(createdAt).toLocaleString('en-UK')}
//                     </p>
//                 </div>

//                 <div className="info">
//                     <h4>
//                         Updated on:
//                     </h4>
//                     <p className='lead'>
//                         {new Date(updatedAt).toLocaleString('en-UK')}
//                     </p>
//                 </div>

//             </div>
//         </table >