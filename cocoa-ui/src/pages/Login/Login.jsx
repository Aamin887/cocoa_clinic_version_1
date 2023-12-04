import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './login.css'
import {toast} from 'react-toastify'
import LOGO from '../../assets/logo.png'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login, reset} from '../../features/auth/authReducer'
import Spinner from '../../components/Spinner/Spinner'

function Login() {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, isLoading, isError, isSuccess,message} = useSelector(state => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(user || isSuccess){
            navigate('/dashboard')
        }

        dispatch(reset())

    }, [user, message, isError, isSuccess, navigate, dispatch])

    const handleChange= function(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = function(e){
        e.preventDefault();

        if(userName === '' || password === ''){
            toast.error('fill in all fields')
            
        }else{
            dispatch(login(formData))
        }
    }

    const {userName, password} = formData

    if(isLoading){
        return <Spinner />
    }
  return (
    <div className="login-page">
        <div className="content">
            <div className="header">
                <h1>Welcome</h1>
                <h3>Cocoa Clinic User Portal</h3>
                <div className="logo">
                    <img src={LOGO} alt="clinic-logo"/>
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
                    <button className='btn' type='submit'>Check</button>
                    <Link className='btn' to={'/reset'}>Forgot password</Link>
                    <Link className='btn' to={'/register'}>Register</Link>
                </div>
            </form>
        </div>
    </div>
)
}

export default Login