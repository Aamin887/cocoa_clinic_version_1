import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import LOGO from '../../assets/logo.png'
import './register.css'
import { toast } from 'react-toastify'
import {register} from '../../features/auth/authReducer'
import {useDispatch, useSelector} from 'react-redux'
import Spinner from '../../components/Spinner/Spinner'

function Register() {
    const [formData, setFormData] = useState({
        title:'',
        firstName:'',
        middleName:'',
        lastName:'',
        department:'',
        employmentStatus:'',
        staffId:'',
        password1:'',
        password2:'',
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isLoading, isError, message, isSuccess} = useSelector(state => state.auth)

    const departmentSelection = [
        "Select a department",
        "Accounts", 
        "Administration", 
        "Audit",
        "Audit Annex",
        "Claims", 
        "Consulting Room", 
        "Security", 
        "Pharmacy", 
        "Procurement", 
        "ISU",
        "OPD",
        "Ward Pharmacy", 
        "Ward Main", 
        "Records", 
        "Theater", 
        "Director Office", 
        "Stores",
        "Ward Scanroom", 
        "Reception", 
        "Wellness",
    ]

    const departmentSelectionOptions = departmentSelection.map((data, idx) => <option value={data} key={idx}>{data}</option>)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(user || isSuccess){
            navigate('/user/dashboard')
        }

    },[dispatch, isSuccess, user, isError, navigate, message])

    const handleChange = function(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = function(e){
        e.preventDefault();

        if(!title || !firstName || !lastName|| !department||
        !employmentStatus||
        !password1||
        !password2){
            toast.error('fill in all fields')
        }else {
            if(password1 !== password2){
                toast.warning('passwords do not match')
            }else{
                dispatch(register(formData))
            }
        }
    }

    const {
        title,
        firstName,
        middleName,
        lastName,
        department,
        employmentStatus,
        staffId,
        password1,
        password2,} = formData

    if(isLoading){
        return <Spinner />
    }
  return (
    <div className="register-page">
        <div className="content">
            <div className="header">
                <h1>Welcome</h1>
                <h3>Cocoa Clinic User Portal</h3>
                <div className="logo">
                    <img src={LOGO} alt="clinic-logo"/>
                </div>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>

                {/*title*/}
                <div className="form-control">
                        <label className="form-label">
                            <span className="label-text">
                                Title
                            </span>
                            <select 
                            name='title'
                            value={title}
                            className='input-control'
                            onChange={handleChange}
                            >
                                <option >Select a title</option>
                                <option value="Dr">Dr</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                        </label>
                </div>

                {/*firstName*/}
                <div className="form-control">
                        <label className="form-label">
                            <span className="label-text">
                                First Name
                            </span>
                            <input 
                            type="text" 
                            name='firstName'
                            value={firstName}
                            className="input-control" 
                            onChange={handleChange}
                            />
                        </label>
                </div>

                {/*middleName*/}
                <div className="form-control">
                        <label className="form-label">
                            <span className="label-text">
                                Middle Name (Optional)
                            </span>
                            <input 
                            type="text" 
                            name='middleName'
                            value={middleName}
                            className="input-control" 
                            onChange={handleChange}
                            />
                        </label>
                </div>

                {/*lastName*/}
                <div className="form-control">
                        <label className="form-label">
                            <span className="label-text">
                                Last Name
                            </span>
                            <input 
                            type="text" 
                            name='lastName'
                            value={lastName}
                            className="input-control" 
                            onChange={handleChange}
                            />
                        </label>
                </div>

                {/*department*/}
                <div className="form-control">
                        <label className="form-label">
                            <span className="label-text">
                                Department
                            </span>
                            <select 
                            name='department'
                            value={department}
                            className='input-control'
                            onChange={handleChange}
                            >
                                {/* <option >Select a department</option>
                                <option value="human resource">human resource</option>
                                <option value="nurse unit">Surgery</option>
                                <option value="surgery">Surgery</option> */}
                                {departmentSelectionOptions}
                            </select>
                        </label>
                </div>

                {/*employment status*/}
                <div className="form-control">
                        <label className="form-label">
                            <span className="label-text">
                                Employment Status
                            </span>
                            <select 
                            name='employmentStatus'
                            value={employmentStatus}
                            className='input-control'
                            onChange={handleChange}
                            >
                                <option >Select your employment status</option>
                                <option value="permanent">Permanent Staff</option>
                                <option value="contract">Contract staff</option>
                                <option value="locumDoctor">Locum doctors</option>
                                <option value="locumNurse">Locum nurse</option>
                                <option value="nationalService">National service personal</option>
                            </select>
                        </label>
                </div>

                {/*staff id*/}
                {
                    (employmentStatus === 'nationalService' || employmentStatus === 'permanent') &&  (
                        <div className="form-control">
                        <label className="form-label">
                            <span className="label-text">
                                Staff ID
                            </span>
                            <input 
                            type="text" 
                            name='staffId'
                            value={staffId}
                            className="input-control" 
                            onChange={handleChange}
                            required
                            />
                        </label>
                </div>
                    )
                }

                <div className='form-control'>
                        <label className="form-label">
                            <span className="label-text">
                                Password
                            </span>
                            <input 
                            type="Password" 
                            name='password1'
                            value={password1}
                            className="input-control" 
                            onChange={handleChange}
                            />
                        </label>
                </div>

                <div className='form-control'>
                        <label className="form-label">
                            <span className="label-text">
                                Confirm Password
                            </span>
                            <input 
                            type="Password" 
                            name='password2'
                            value={password2}
                            className="input-control" 
                            onChange={handleChange}
                            />
                        </label>
                </div>

                <div className="btns-container">
                    <button className='btn'>Register</button>
                    <Link className='btn' to={'/'}>Login Page</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register