import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { useData } from '../context/DataContext'
import { useAuth } from '../context/AuthContext'
import { Common } from '../utils/Common'
import { AiOutlineLike } from 'react-icons/ai'
import { MdAccessTime, MdPlaylistAdd } from 'react-icons/md'
import { errorPopup, successPopup, warningPopup } from '../utils/toast'

import '../styles/VideoPage.css'
import { getAuthData } from '../utils/authUtil'

const VideoPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { videos, liked } = useData()
  const { isUser } = useAuth()
  const [video, setVideo] = useState({})
  const { isLiked, isInWatchLater } = Common(id)

  const vid = videos && videos.find(vid => vid._id === id)

  useEffect(() => {
    setVideo({ ...vid })
  }, [vid])


  const onClickHandler = (_id) => {
    navigate(`/video/${_id}`)
  }

  const likeHandler = async () => {
    if (!isUser) {
      errorPopup("You must be logged in")
      return
    } else {
      if (isLiked) {
        try {
          await axios.delete(`/api/user/likes/${id}`, {
            headers: {
              authorization: getAuthData()
            }
          })
          warningPopup("Removed from liked videos.")
        } catch (err) {
          console.log(err.message)
        }
      } else {
        try {
          await axios.post("/api/user/likes", { video }, {
            headers: {
              authorization: getAuthData()
            }
          })
          successPopup("Added to liked videos")
        } catch (err) {
          if (err.response.status === 404) {
            errorPopup('No such user exists!');
          } else {
            errorPopup('video already exists in liked videos!');
          }
        }
      }
    }
  }

  const watchLaterHandler = async () => {
    if (!isUser) {
      errorPopup("You must be logged in")
      return
    } else {
      if (isInWatchLater) {
        try {
          await axios.delete(`/api/user/watchlater/${id}`, {
            headers: {
              authorization: getAuthData()
            }
          })
          warningPopup("Removed from watch later.")
        } catch (err) {
          console.log(err.message)
        }
      } else {
        try {
          await axios.post("/api/user/watchlater", { video }, {
            headers: {
              authorization: getAuthData()
            }
          })
          successPopup("Added to watch later")
        } catch (err) {
          if (err.response.status === 404) {
            errorPopup('No such user exists!');
          } else {
            errorPopup('video already exists in watch later!');
          }
        }
      }
    }
  }

  return video && (
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
              <div className={`${isLiked && 'isLiked'} flex align-center `} onClick={likeHandler}>
                <AiOutlineLike />
                <span>{video.likes}</span>
              </div>
              <div className={`${isInWatchLater && 'isInWatchLater'} flex align-center `} onClick={watchLaterHandler}>
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
      <div className="more-videos">
        <span>More Videos</span>
        <div className="more-videos-container">
          {
            videos?.slice(0, 7).map(item => (
              <div key={item._id} className="more-video" onClick={() => onClickHandler(item._id)}>
                <img
                  src={`https://i.ytimg.com/vi/${item._id}/maxresdefault.jpg`}
                  alt="thumbnail"
                />
                <div>
                  <span>{item.title}</span>
                  <span>{item.creator}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default VideoPage