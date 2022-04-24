import React from 'react'

import VideoCard from '../components/VideoCard'
import { useData } from '../context/DataContext'

import '../styles/WatchLater.css'

const WatchLater = () => {
  const { watchLater } = useData()

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