import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import '../styles/VideoCard.css'

const VideoCard = ({ _id, title, createdAt, views, likes, creator, creatorImg }) => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(`/video/${_id}`)
  }

  return (
    <div className='videoCard' onClick={onClickHandler}>
      <img
        src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
        alt="thumbnail"
      />
      <BsFillPlayFill className='play-icon' />
      <div className="videoCard-details">
        <img src={creatorImg} alt="logo" className='creator-img' />
        <div className='details-container'>
          <span className="title">{title}</span>
          <div>
            <span>{creator}-{views} views</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard