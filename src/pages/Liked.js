import React from 'react'

import VideoCard from '../components/VideoCard'
import { useData } from '../context/DataContext'

import '../styles/LikedVideos.css'

const Liked = () => {
  const { liked } = useData()

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