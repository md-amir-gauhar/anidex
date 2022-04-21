import React, { useEffect } from 'react'
import axios from 'axios'

import VideoCard from '../components/VideoCard'
import { useData } from '../context/DataContext'
import { getAuthData } from '../utils/authUtil'

import '../styles/WatchLater.css'

const WatchLater = () => {
  const { watchLater, dispatch } = useData()


  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get('/api/user/watchlater', {
          headers: {
            authorization: getAuthData()
          }
        })

        dispatch({
          type: "WATCH_LATER",
          payload: res.data.watchlater
        })
      })()
    } catch (err) {
      console.log(err.message)
    }
  }, [])

  return (
    <div className='watchLater'>
      <h3>Watch Later</h3>
      <div className="watchLater-container">
        {
          watchLater && watchLater.map(({ _id, title, createdAt, views, likes, creator, creatorImg }) => (
            <VideoCard key={_id} _id={_id} title={title} createdAt={createdAt} views={views} likes={likes} creator={creator} creatorImg={creatorImg} />
          ))
        }
      </div>
    </div>
  )
}

export default WatchLater