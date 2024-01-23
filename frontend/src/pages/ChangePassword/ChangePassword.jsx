import React from 'react'
import './password.css'
import LOGO from '../../assets/logo.png'
import { useState } from 'react';

function ChangePassword() {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: ''
  })

  const handleChange = function (e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = function (e) {
    e.preventDefault();

  }

  const { fullName, userName } = formData

  return (
    <div className="reset-page">
      <div className="content">
        <div className="header">
          <h1>Welcome</h1>
          <h3>Request Password change</h3>
          <div className="logo">
            <img src={LOGO} alt="clinic-logo" />
          </div>
        </div>
        <form className="reset-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="form-label">
              <span className="label-text">
                Full name
              </span>
              <input
                type="text"
                name='userName'
                value={fullName}
                className="input-control"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='form-control'>
            <label className="form-label">
              <span className="label-text">
                User name
              </span>
              <input
                type="Password"
                name='password'
                value={userName}
                className="input-control"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="btns-container">
            <button className='btn' type='submit'>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword;