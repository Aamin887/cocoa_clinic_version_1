import { NavLink, Link } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaRegClock, FaLock } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import './adminnav.css'

function AdminNav({ logo, nav }) {
    const addActiveLink = function (e) {
        e.target.classList.add('hovered')
        console.log(e.target.className)
    }

    const removeActiveLink = function (e) {
        e.target.classList.remove('hovered')
        console.log(e.target.className)
    }

    return (
        <div class="navigation" ref={nav}>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        <span class="logo-wrapper"><img class="logo" src={logo} alt="" /></span>
                    </NavLink>
                </li>

                <li onMouseOver={addActiveLink}>
                    <NavLink to={'/admin/dashboard'}>
                        <span class="icons">
                            <FaHome />
                        </span>
                        <span class="title">Dashboard</span>
                    </NavLink>
                </li>

                <li onMouseOver={addActiveLink} onMouseOut={removeActiveLink}>
                    <NavLink to={'/schedule'}>
                        <span class="icons">
                            <FaCalendarAlt />
                        </span>
                        <span class="title">Schedule</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/notes'}>
                        <span class="icons">
                            <FaNoteSticky />
                        </span>
                        <span class="title">Notice</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/activities'}>
                        <span class="icons">
                            <FaRegClock />
                        </span>
                        <span class="title">Activities</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/passwords'}>
                        <span class="icons">
                            <FaLock />
                        </span>
                        <span class="title">Password Reset</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/api/dashboard'}>
                        <span class="icons">
                            <IoMdHelp />
                        </span>
                        <span class="title">Help</span>
                    </NavLink>
                </li>

                <li>
                    <Link onClick={() => console.log('ds')}>

                        <span class="icons">
                            <IoExitOutline />
                        </span>
                        <span class="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminNav