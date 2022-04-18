import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Auth.css'

const Login = () => {
  return (
    <div className='auth'>
      <div className="auth-container">
        <h2>Login</h2>
        <form>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email...' required />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password...' required />
          </div>
          <div className="buttons-container">
            <button type='submit'>Login</button>
            <div className="or">
              <div></div>
              <span>or</span>
              <div></div>
            </div>
            <button>Login with test credentials</button>
          </div>
        </form>

        <div>
          <span>Don't have an account,</span>
          <Link to='/signup'>Register here</Link>
        </div>
      </div>
    </div>
  )
}

export default Login