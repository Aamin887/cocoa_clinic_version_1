// import { GiHamburgerMenu } from 'react-icons/gi'
import LOGO from '../../assets/logo.png'
import './nav.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Nav({ logout, location }) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  console.log(user)

  return (
    <nav className="user-main-nav">
      <div className="content">
        <div className="left">
          <div className="logo">
            <img src={LOGO} alt="logo" />
          </div>
          <div className="user-msg">
            <h4>Welcome</h4>
            <p>{user?.firstName} {user?.lastName}</p>
          </div>
        </div>

        <nav className="right">
          <button className='btn' onClick={() => {
            dispatch(logout())
            navigate(location)
          }
          }>Logout</button>
        </nav>
      </div>
    </nav>
  )
}

export default Nav