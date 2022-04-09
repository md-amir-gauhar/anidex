import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillPlayFill } from 'react-icons/bs'
import '../styles/VideoCard.css'

const VideoCard = ({ _id, title, createdAt, views, likes, creator }) => {
  return (
    <div className='videoCard'>
      <Link to="#">
        <img
          src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
          alt="thumbnail"
        />
        <BsFillPlayFill />
        <div className="videoCard-details">
          <h1>{title}</h1>
          <div>
            <span>{creator}-{views} views</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default VideoCard