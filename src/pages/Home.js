import React from 'react'
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

      </div>
    </div>
  )
}

export default Home