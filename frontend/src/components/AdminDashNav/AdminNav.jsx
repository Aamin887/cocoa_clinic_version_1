import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaRegClock, FaLock } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import './adminnav.css'
import { useDispatch } from "react-redux";


function AdminNav({ logo, nav, logout }) {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addActiveLink = function (e) {
        e.target.classList.add('hovered')
    }

    const removeActiveLink = function (e) {
        e.target.classList.remove('hovered')
    }

    const handleLogout = function () {
        dispatch(logout());
        navigate('/admin')
    }

    return (
        <div className="navigation" ref={nav}>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        <span className="logo-wrapper"><img className="logo" src={logo} alt="" /></span>
                    </NavLink>
                </li>

                <li onMouseOver={addActiveLink}>
                    <NavLink to={'/admin/dashboard'}>
                        <span className="icons">
                            <FaHome />
                        </span>
                        <span className="title">Dashboard</span>
                    </NavLink>
                </li>

                <li onMouseOver={addActiveLink} onMouseOut={removeActiveLink}>
                    <NavLink to={'/schedule'}>
                        <span className="icons">
                            <FaCalendarAlt />
                        </span>
                        <span className="title">Schedule</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/notes'}>
                        <span className="icons">
                            <FaNoteSticky />
                        </span>
                        <span className="title">Notice</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/activities'}>
                        <span className="icons">
                            <FaRegClock />
                        </span>
                        <span className="title">Activities</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/passwords'}>
                        <span className="icons">
                            <FaLock />
                        </span>
                        <span className="title">Password Reset</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/api/dashboard'}>
                        <span className="icons">
                            <IoMdHelp />
                        </span>
                        <span className="title">Help</span>
                    </NavLink>
                </li>

                <li>
                    <Link onClick={handleLogout}>

                        <span className="icons">
                            <IoExitOutline />
                        </span>
                        <span className="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminNav