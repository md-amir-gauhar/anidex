import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useData } from '../context/DataContext'
import { getAuthData } from '../utils/authUtil'

import '../styles/History.css'

const History = () => {
  const { history, dispatch } = useData()
  const navigate = useNavigate()

  const onClickHandler = (_id, title, creator) => {
    navigate(`/video/${_id}`)
    try {
      (async () => {
        const video = {
          _id,
          id: _id,
          title,
          creator,
        }
        const response = await axios.post("/api/user/history", { video }, {
          headers: {
            authorization: getAuthData()
          }
        })
        console.log(response);
      })()
    } catch (err) {
      console.log(err.message)
    }
  }

  const clearHandler = () => {
    try {
      (async () => {
        axios.delete('/api/user/history/all', {
          headers: {
            authorization: getAuthData()
          }
        })

        dispatch({
          type: "HISTORY",
          payload: []
        })
      })()
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get('/api/user/history', {
          headers: {
            authorization: getAuthData()
          }
        })

        console.log(res.data.history)
        dispatch({
          type: "HISTORY",
          payload: res.data.history
        })
      })()
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  return (
    <div className='history'>
      <div>
        <h3>History</h3>
        <button onClick={clearHandler}>Clear</button>
      </div>
      <div className="history-container">
        {
          history && history.map(({ id, title, creator }) => (
            <div key={id} className="history-video" onClick={() => onClickHandler(id, title, creator,)}>
              <img
                src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                alt="thumbnail"
              />
              <div>
                <span>{title}</span>
                <span>{creator}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default History