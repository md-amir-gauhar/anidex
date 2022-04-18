import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Auth.css'

const Signup = () => {
  return (
    <div className='auth'>
      <div className="auth-container">
        <h2>Register</h2>
        <form>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='Enter Username...' required />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email...' required />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password...' required />
          </div>
          <button type='submit' className='register-button'>Register</button>
        </form>

        <div>
          <span>Already have an account,</span>
          <Link to='/login'>login here</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup