import React from 'react'
import VideoCard from '../components/VideoCard'
import { useData } from '../context/DataContext'

import '../styles/Home.css'

const Home = () => {
  const { videos, categories, sortByCategory, dispatch } = useData()

  const clickHandler = (categoryName) => {
    dispatch({
      type: "SORT_BY_CATEGORY",
      payload: categoryName
    })

    const newCategories = categories.map(cat => cat.categoryName === categoryName ? { ...cat, active: true } : { ...cat, active: false })

    dispatch({
      type: "INITIAL_CATEGORIES",
      payload: newCategories
    })
  }

  const filterVideos = (videos, sortByCategory) => {
    const filteredVideo = videos.filter(video => video.category === sortByCategory)

    return filteredVideo.length > 0 ? filteredVideo : videos
  }

  const filteredVideos = filterVideos(videos, sortByCategory)

  return (
    <div className='home'>
      <div className="categories-container">
        {
          categories.map(({ _id, categoryName, active }) => (
            <span key={_id} className={`category ${active && "is-active"}`} onClick={() => clickHandler(categoryName)}>{categoryName}</span>
          ))
        }
        {/* <span>All</span>
        <span>AMV</span>
        <span>Anime Trailer</span>
        <span>Anime Opening</span> */}
      </div>
      <div className='videoCard-container'>
        {filteredVideos.map(({ _id, title, createdAt, views, likes, creator, creatorImg }) => (
          <VideoCard key={_id} _id={_id} title={title} createdAt={createdAt} views={views} likes={likes} creator={creator} creatorImg={creatorImg} />
        ))}
      </div>
    </div>
  )
}

export default Home