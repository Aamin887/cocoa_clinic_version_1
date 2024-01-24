import LOGO from '../../assets/logo.png'
import AdminNav from '../../components/AdminDashNav/AdminNav'
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUserFriends, FaUserPlus, FaLock } from "react-icons/fa";
import './admindash.css'
import Cardbox from '../../components/Cardbox/Cardbox';
import RecentUsers from '../../components/RecentUsers/RecentUsers';
import RecentRequest from '../../components/RecentRequests/RecentRequest';
import { useEffect, useRef, useState } from 'react';
import AdminHeader from '../../components/AdminHeader/AdminHeader';

import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, adminLogout } from '../../features/auth/authReducer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner/Spinner';



function AdminDash() {
  // reference to main section and navigation bar
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const nav = useRef();
  const main = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { admin, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

  const data = useSelector(state => state.auth);


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!admin) {
      navigate('/admin')
      return
    }

    if (admin) {
      dispatch(getAllUser())
    }

    if (admin && data?.data) {
      setUsers(data.data[0]);
    }

    // to handle automatic logout
    // after user is logged in for 12 hours
    // setTimeout(() => {
    //   dispatch(adminLogout())
    //   console.log('here')
    // }, (74800))


  }, [admin, dispatch, navigate, isError, isSuccess, message]);

  // expanding retracting the nav bar
  const toggleNav = function () {
    nav.current.classList.toggle('active');
    main.current.classList.toggle('active');
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="container">
      <AdminNav logo={LOGO} nav={nav} logout={adminLogout} />

      <div className="main" ref={main}>

        <AdminHeader setSearchQuery={setSearchQuery} toggleNav={toggleNav} />
        <Cardbox data={[
          { name: users?.length === 1 ? 'Account' : 'Accounts', icon: FaUserFriends, number: users?.length },
          { name: 'Account requests', icon: FaUserPlus, number: 9 },
          { name: 'Password requests', icon: FaLock, number: 1 },
          { name: 'Help requests', icon: IoChatboxEllipses, number: 1 }
        ]} />
        <div className="requests">
          <RecentRequest data={users} />
          <RecentUsers data={users} />
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