import LOGO from '../../assets/logo.png'
import AdminNav from '../../components/AdminDashNav/AdminNav'
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUserFriends, FaUserPlus, FaLock } from "react-icons/fa";
import './admindash.css'

import Cardbox from '../../components/Cardbox/Cardbox';
import RecentUsers from '../../components/RecentUsers/RecentUsers';
import RecentRequest from '../../components/RecentRequests/RecentRequest';
import { useRef, useState } from 'react';
import AdminHeader from '../../components/AdminHeader/AdminHeader';

import { getAllUser } from '../../features/auth/authReducer';



function AdminDash() {
  // reference to main section and navigation bar
  const [searchQuery, setSearchQuery] = useState('')
  const nav = useRef()
  const main = useRef()



  // expanding retracting the nav bar
  const toggleNav = function () {
    nav.current.classList.toggle('active')
    main.current.classList.toggle('active')
    console.log(searchQuery)
  }

  return (
    <div className="container">
      <AdminNav logo={LOGO} nav={nav} />

      <div className="main" ref={main}>

        <AdminHeader setSearchQuery={setSearchQuery} toggleNav={toggleNav} />
        <Cardbox data={[
          { name: 'Account', icon: FaUserFriends, number: 100 },
          { name: 'Account requests', icon: FaUserPlus, number: 9 },
          { name: 'Password requests', icon: FaLock, number: 1 },
          { name: 'Help requests', icon: IoChatboxEllipses, number: 1 }
        ]} />
        <div class="requests">
          <RecentRequest />
          <RecentUsers />
        </div>
      </div >
    </div >
  )
}

export default AdminDash


// < div className = "container" >
//     <AdminNav logo={LOGO} nav={nav} />
//     <div className="main" ref={main}>

//       <AdminHeader setSearchQuery={setSearchQuery} toggleNav={toggleNav} />
//       <Cardbox data={[
//         { name: 'Account', icon: FaUserFriends, number: 100 },
//         { name: 'Account requests', icon: FaUserPlus, number: 9 },
//         { name: 'Password requests', icon: FaLock, number: 1 },
//         { name: 'Help requests', icon: IoChatboxEllipses, number: 1 }
//       ]} />
//       <div class="requests">
//         <RecentRequest />
//         <RecentUsers />
//       </div>
//     </div>
//   </div >