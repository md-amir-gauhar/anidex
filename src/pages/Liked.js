import React, { useEffect } from 'react'
import axios from 'axios'

import VideoCard from '../components/VideoCard'
import { useData } from '../context/DataContext'
import { getAuthData } from '../utils/authUtil'

import '../styles/LikedVideos.css'

const Liked = () => {
  const { liked, dispatch } = useData()


  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get('/api/user/likes', {
          headers: {
            authorization: getAuthData()
          }
        })

        dispatch({
          type: "LIKED_VIDEOS",
          payload: res.data.likes
        })
      })()
    } catch (err) {
      console.log(err.message)
    }
  }, [])

  return (
    <div className='liked-videos'>
      <h3>Liked Videos</h3>
      <div className="likedVideos-container">
        {
          liked && liked.map(({ _id, title, createdAt, views, likes, creator, creatorImg }) => (
            <VideoCard key={_id} _id={_id} title={title} createdAt={createdAt} views={views} likes={likes} creator={creator} creatorImg={creatorImg} />
          ))
        }
      </div>

    </div>
  )
}

export default Liked