import React, { useCallback, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import axios from 'axios'

import { setAuthData } from '../utils/authUtil'
import { useAuth } from '../context/AuthContext'
import { invalidCredentials, loggedInSuccessfully, userDoesNotExists } from '../utils/toast'

import '../styles/Auth.css'

const Login = () => {
  const [goto, setGoto] = useState(false)
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const { dispatch } = useAuth()

  const { email, password } = credentials

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  })

  const sendReq = async (body) => {
    try {
      const response = await axios.post('/api/auth/login', body);
      setAuthData(response.data.encodedToken);
      return response.data.encodedToken;
    } catch (err) {
      if (err.response.status === 404) {
        invalidCredentials()
      }
      if (err.response.status === 401) {
        userDoesNotExists()
      }
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    sendReq({
      email,
      password
    }).then(res => {
      dispatch({
        type: "LOGGED_IN",
        payload: res === undefined ? null : res
      })
      setGoto(res === undefined ? false : true);
      loggedInSuccessfully()
    })
    return <Navigate to="/" />
  }

  if (goto) {
    return <Navigate to='/' />;
  }

  return (
    <div className='auth'>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter Email...'
              name='email' value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='Enter Password...'
              name='password'
              value={password}
              onChange={handleChange}
              required
            />
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