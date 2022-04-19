import { FiLogOut } from 'react-icons/fi'

import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useScrollingUp from '../hooks/useScrollingUp'
import { removeAuthData } from '../utils/authUtil'

import '../styles/Header.css'

const Header = () => {
  const scrollingUp = useScrollingUp()
  const { isUser, dispatch } = useAuth()

  const logoutHandler = () => {
    removeAuthData()
    dispatch({
      type: "LOGGED_OUT"
    })
    return <Navigate to="/login" />;
  }

  return (
    <header className={`header flex align-center justify-between ${scrollingUp && 'header-sticky'}`}>
      <Link to="/" className="logo">
        <img src="/logo.png" alt="logo" />
      </Link>
      {
        isUser ? <button onClick={logoutHandler} className="logout-btn">
          <FiLogOut />
          <span>Logout</span>
        </button> : <Link to='/login'>Login</Link>
      }
    </header>
  )
}

export default Header