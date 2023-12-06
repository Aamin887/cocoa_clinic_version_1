import { useEffect} from 'react'
import {useNavigate, Link, } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';
import LOGO from '../../assets/logo.png'
import Card from '../../components/Card/Card'
import './admindash.css'
import {adminLogout, getAllUser} from '../../features/auth/authReducer'
import { toast } from 'react-toastify';


function AdminDash() {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {admin, data ,isError, isLoading, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() =>{
      if(isError){
        toast.error(message)
      }

        if(!admin){
            navigate('/admin/login')
        }

        if(admin){
          dispatch(getAllUser())
        }


    }, [admin, dispatch, navigate, isError, isSuccess, message])


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
        
            <nav className="nav">
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
          {
            data.map((user, idx) => {
              return (<>
                <Card props={user} key={idx} />
              </>)
            })
          }
        </div>
      </div>

    </div>
  )
}

export default AdminDash