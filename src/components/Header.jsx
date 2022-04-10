import { Link } from 'react-router-dom'
import useScrollingUp from '../hooks/useScrollingUp'

import '../styles/Header.css'

const Header = () => {
  const scrollingUp = useScrollingUp()
  console.log(scrollingUp)
  return (
    <header className={`header flex align-center justify-between ${scrollingUp && 'header-sticky'}`}>
      <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <Link to='#'>Login</Link>
    </header>
  )
}

export default Header