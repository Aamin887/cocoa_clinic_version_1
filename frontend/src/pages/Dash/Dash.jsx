import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';
import UserCard from '../../components/UserCard/UserCard';
import { toast } from 'react-toastify';
import Nav from '../../components/Nav/Nav';
import { getUser, logout } from '../../features/auth/authReducer';
import './dash.css'

function Dash() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, data } = useSelector(state => state.auth)

  const { userInfo, isError, isLoading, isSuccess, message } = useSelector(state => state.userInfo)



  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate('/')
    }

    if (user) {
      dispatch(getUser())
    }

    // to handle automatic logout
    // after user is logged in for 12 hours
    setTimeout(() => {
      dispatch(logout())
      console.log('here')
    }, (74800))

  }, [user, userInfo, dispatch, navigate, isError, isSuccess, message])

  useEffect(() => {
    if (data?.status !== 'active') {
      toast.info('Note your username for your next login')
    }

  }, [data])

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  console.log(data)

  return (
    <div className='page user-dash'>
      <Nav location={'/'} logout={logout} />

      {
        data?.status !== 'active' ? (<>
          <div className="status-overlay">
            <h1 style={{ color: 'red' }}>Pending</h1>
            <p>Account under review</p>
            <p className='note-username'>Your username: {data?.userName}</p>
          </div>
        </>) : (<>

          <div className="user-dash">
            <div className="content">
              <UserCard props={data} />
            </div>
          </div>
        </>)
      }
    </div>
  )
}

export default Dash;


