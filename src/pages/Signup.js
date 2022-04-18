import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { Navigate, Link } from 'react-router-dom'

import { setAuthData } from '../utils/authUtil'
import { userAlreadyExists, passwordDidNotMatch } from '../utils/toast'
import { useAuth } from '../context/AuthContext'

import '../styles/Auth.css'

const Signup = () => {
  const [goto, setGoto] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", email: "", password: "", confirmPassword: "" })
  const { dispatch } = useAuth()

  const { username, email, password, confirmPassword } = credentials

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  })

  const sendReq = async (data) => {
    console.log(data)
    try {
      const res = await axios.post('/api/auth/signup', data)
      console.log(res)
      setAuthData(res.data.encodedToken)
      return res
    } catch (err) {
      if (err.response.status === 422) {
        userAlreadyExists()
      }
      console.log(err.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      sendReq({
        username,
        email,
        password
      }).then(res => {
        console.log(res)
        dispatch({
          type: "SIGNED_UP",
          payload: res === undefined ? false : true
        })
        setGoto(res === undefined ? false : true);
      })
    } else {
      passwordDidNotMatch()
      setCredentials({ ...credentials, password: '', confirmPassword: '' });
    }
  }

  if (goto) {
    return <Navigate to='/' />;
  }

  return (
    <div className='auth'>
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder='Enter username...'
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter email...'
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='Enter password...'
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="confirm-password">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              placeholder='Enter password again...'
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
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