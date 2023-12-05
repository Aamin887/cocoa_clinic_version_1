// import { GiHamburgerMenu } from 'react-icons/gi'
import LOGO from '../../assets/logo.png'
import './nav.css'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


function Nav({logout, location}) {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user}  = useSelector(state => state.auth)

    console.log(user)

  return (
    <nav className="left-side bg-dark box-shadow">
        <div className="content">
          <div className="header">
            <div className="logo">
              <img src={LOGO} alt="logo" />
            </div>

          </div>

            <nav className="nav">
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