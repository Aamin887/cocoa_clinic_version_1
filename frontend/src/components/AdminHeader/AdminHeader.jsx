import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import LOGO from '../../assets/logo.png'
import './adminheader.css'

function AdminHeader({ setSearchQuery, toggleNav }) {
    return (
        < div className="topbar" >
            <div className="toggle">
                <span name="menu-outline" onClick={toggleNav}>
                    <IoMenu />
                </span>
            </div>

            <div className="search">
                <label>
                    <input
                        type="text"
                        placeholder="Search here"
                        autoComplete='off'
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <ion-icon name="search-outline">
                        <CiSearch style={{ color: 'black' }} />
                    </ion-icon>
                </label>
            </div>

            <div className="user">
                <img src={LOGO} alt="user profile" />
            </div>
        </div >
    )
}

export default AdminHeader