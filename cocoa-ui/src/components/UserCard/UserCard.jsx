import './usercard.css'

function UserCard({props}) {
    const {title, firstName, middleName,lastName, staffId, password, userName, department, employmentStatus, status } = props

    console.log(status)

  return (
    <article className='user-card bg-dark box-shadow'>  
        <div className="content">
            <div className="header">
                <div className="status">
                    <h3>Account Status:</h3>
                    {
                        status === true? (
                        <>
                            <span className='state active'>
                                Active
                            </span>
                        </>) : (
                        <>
                            <span className='state pending'>
                                Pending
                            </span>
                        </>
                        )
                    }
                </div>

                <div className="basic-info">
                    <h3>Welcome</h3>
                    <p>
                        <span className='title'>{title}</span>
                        <span className='firstName'>{firstName}</span>
                            {
                            middleName ? (
                                <span className='middle'>{middleName}</span>
                            ) : ('')
                            }
                        <span className='lastName'>{lastName}</span>
                    </p>
                </div>
            </div>

            <div className="body">

                <div className="col">
                    <div className="data-field">
                        <h3>Username</h3>
                        <p>{userName}</p>
                    </div>

                    <div className="data-field">
                        <h3>Department</h3>
                        <p>{department}</p>
                    </div>

                    <div className="data-field">
                        <h3>Employment Type</h3>
                        <p>{employmentStatus}</p>
                    </div>
                </div>

                <div className="col">

                    <div className="data-field">
                        <h3>Password</h3>
                        <p>{password}</p>
                    </div>

                    {
                    staffId ? (
                        <div className="data-field">
                            <h3>Staff ID</h3>
                            <p>{staffId}</p>
                        </div>
                    ): ('')
                }

                </div>
            </div>
        </div>
    </article >
  )
}

export default UserCard