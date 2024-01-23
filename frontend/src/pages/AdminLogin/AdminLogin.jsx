import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './adminlogin.css'
import { toast } from 'react-toastify'
import LOGO from '../../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogin, reset } from '../../features/auth/authReducer'
import Spinner from '../../components/Spinner/Spinner'

function AdminLogin() {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { admin, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (admin || isSuccess) {
            console.log(admin)
            navigate('/admin/dashboard')
        }

        dispatch(reset())

    }, [admin, message, isError, isSuccess, navigate, dispatch])

    const handleChange = function (e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = function (e) {
        e.preventDefault();

        if (userName === '' || password === '') {
            toast.error('fill in all fields')
        } else {
            dispatch(adminLogin(formData))
        }

    }

    if (isLoading) {
        return <Spinner />
    }

    const { userName, password } = formData
    return (
        <div className="admin-login-page">
            <div className="content">
                <div className="header">
                    <h1>Welcome</h1>
                    <h3>Cocoa Clinic Admin Portal</h3>
                    <div className="logo">
                        <img src={LOGO} alt="clinic-logo" />
                    </div>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>

                    <div className="form-control">
                        <label className="form-label">
                            <span className="label-text">
                                Username
                            </span>
                            <input
                                type="text"
                                name='userName'
                                value={userName}
                                className="input-control"
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className='form-control'>
                        <label className="form-label">
                            <span className="label-text">
                                Password
                            </span>
                            <input
                                type="Password"
                                name='password'
                                value={password}
                                className="input-control"
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="btns-container">
                        <button className='btn' type='submit'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin