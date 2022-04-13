import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { useData } from '../context/DataContext'
import { AiFillLike } from 'react-icons/ai'
import { MdAccessTimeFilled, MdPlaylistAdd } from 'react-icons/md'

import '../styles/VideoPage.css'

const VideoPage = () => {
  const { id } = useParams()
  const { videos } = useData()

  const video = videos.find(vid => vid._id === id)

  console.log(video);
  return (
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
                <AiFillLike />
                <span>{video.likes}</span>
              </div>
              <div className='flex align-center'>
                <MdAccessTimeFilled />
                <span>Watch Later</span>
              </div>
              <div className='flex align-center'>
                <MdPlaylistAdd />
                <span>Add to Playlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage