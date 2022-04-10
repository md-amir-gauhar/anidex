import React from 'react'
import VideoCard from '../components/VideoCard'
import { useData } from '../context/DataContext'

import '../styles/Home.css'

const Home = () => {
  const { videos, categories } = useData()

  console.log(videos);
  return (
    <div className='home'>
      <div className="categories-container">
        <span>All</span>
        <span>AMV</span>
        <span>Anime Trailer</span>
        <span>Anime Opening</span>
      </div>
      <div className='videoCard-container'>
        {videos.map(({ _id, title, createdAt, views, likes, creator, creatorImg }) => (
          <VideoCard key={_id} _id={_id} title={title} createdAt={createdAt} views={views} likes={likes} creator={creator} creatorImg={creatorImg} />
        ))}
      </div>
    </div>
  )
}

export default Home