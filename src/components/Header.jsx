import { Link } from 'react-router-dom'
import useScrollingUp from '../hooks/useScrollingUp'

import '../styles/Header.css'

const Header = () => {
  const scrollingUp = useScrollingUp()
  return (
    <header className={`header flex align-center justify-between ${scrollingUp && 'header-sticky'}`}>
      <Link to="/" className="logo">
        <img src="/logo.png" alt="logo" />
      </Link>
      <Link to='/login'>Login</Link>
    </header>
  )
}

export default Header