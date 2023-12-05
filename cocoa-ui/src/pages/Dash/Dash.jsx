import { useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card'
import UserCard from '../../components/UserCard/UserCard';
import { toast } from 'react-toastify';
import Nav from '../../components/Nav/Nav';
import { getUser, logout } from '../../features/auth/authReducer';
import './dash.css'



function Dash() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user, data} = useSelector(state => state.auth)

    const {userInfo, isError, isLoading, isSuccess, message} = useSelector(state => state.userInfo)

    useEffect(() =>{
      if(isError){
        toast.error(message)
      }

        if(!user){
            navigate('/')
        }

        if(user){
          dispatch(getUser())
        }

    }, [user, userInfo, dispatch, navigate, isError, isSuccess, message])

    if(isLoading){
      return(
        <Spinner/>
      )
    }

  return (
    <div className='page user-dash'>
      <Nav location={'/'} logout={logout}/>

      <div className="page right-side bg-dark">
        <div className="content">
          {/* <Card className={'user-card'} props={data} /> */}
        <UserCard props={data}/>
        </div>
      </div>

    </div>
  )
}

export default Dash


