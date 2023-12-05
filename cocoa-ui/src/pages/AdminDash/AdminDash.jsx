import { useEffect} from 'react'
import {useNavigate, Link, } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';
import { GiHamburgerMenu } from "react-icons/gi";
import LOGO from '../../assets/logo.png'
import Card from '../../components/Card/Card'
import './admindash.css'
import {adminLogout, reset} from '../../features/auth/authReducer'
import { toast } from 'react-toastify';


function AdminDash() {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {admin, isError, isLoading, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() =>{
      if(isError){
        toast.error(message)
      }

        if(!admin){
            navigate('/admin/login')
        }

        dispatch(reset())

    }, [admin, dispatch, navigate, isError, isSuccess, message])

    const data = {
      title:'Dr',
      firstName:'Amin',
      middleName:'Forkah',
      lastName: 'Alhassan',
      staffId: '2122Ad',
      department: 'Accounts',
      employmentStatus: 'Permanent',
      userName: 'amin_99',
      password: 'Amimata@1'

    }

    if(isLoading){
      return(
        <Spinner/>
      )
    }

  return (
    <div className='page admin-dash'>

      <div className="left-side bg-dark box-shadow">
        <div className="content">
          <div className="header">
            <div className="logo">
              <img src={LOGO} alt="logo" />
            </div>

          </div>
          <div>
            <GiHamburgerMenu 
              size={'2em'}
              color='#ea4c89'
              className='hamburger-menu'
              onClick={() => console.log('menu btn')}
            />
          </div>
            <nav className="nav">
                <Link className='box-shadow'>Dashboard</Link>
                <Link>Pending User</Link>
                <Link>Completed User</Link>
                <button className='btn' onClick={() => {
                  dispatch(adminLogout())
                  navigate('/admin/login')
                }
                  }>Logout</button>
            </nav>
        </div>
      </div>

      <div className="page right-side bg-dark">
        <div className="content">
          <Card props={data} />
          <Card props={data} />
          <Card props={data} />
        </div>
      </div>

    </div>
  )
}

export default AdminDash