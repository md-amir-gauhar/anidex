import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { useData } from '../context/DataContext'
import { AiOutlineLike } from 'react-icons/ai'
import { MdAccessTime, MdPlaylistAdd } from 'react-icons/md'

import '../styles/VideoPage.css'

const VideoPage = () => {
  const { id } = useParams()
  const { videos } = useData()
  const [video, setVideo] = useState({})
  const vid = videos && videos.find(vid => vid._id === id)

  useEffect(() => {
    setVideo({ ...vid })
  })
  // const video = videos.find(vid => vid._id === id)

  return video ? (
    <div className='videoPage'>
      <div className="video-container">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video._id}`}
          loop='true'
          width='100%'
          height='70%'
          controls='true'
        />
        <div className='video-container-footer'>
          <p className="video-title">{video.title}</p>
          <div className='video-details'>
            <div>
              <span className="likes">{video.views} views</span>
              <span className="date">{video.createdAt}</span>
            </div>
            <div className='video-actions'>
              <div className='flex align-center'>
                <AiOutlineLike />
                <span>{video.likes}</span>
              </div>
              <div className='flex align-center'>
                <MdAccessTime />
                <span>Watch Later</span>
              </div>
              <div className='flex align-center'>
                <MdPlaylistAdd />
                <span>Add to Playlist</span>
              </div>
            </div>
          </div>
          <div className="creator-container">
            <img src={video.creatorImg} alt="creator-logo" className='creator-img' />
            <div>
              <span>{video.creator}</span>
              <span>{video.subscriber} <span>Subscriber</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <></>
}

export default VideoPage