import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiOutlineHome, AiOutlineHistory, AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai'
import { MdPlaylistPlay } from 'react-icons/md'

import '../styles/SideMenu.css'

const SideMenu = () => {
  return (
    <nav className="sideMenu">
      <NavLink to="/">
        <AiOutlineHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/history">
        <AiOutlineHistory />
        <span>History</span>
      </NavLink>
      <NavLink to="/liked">
        <AiOutlineLike />
        <span>Liked Videos</span>
      </NavLink>
      <NavLink to="/watchlater">
        <AiOutlineFieldTime />
        <span>Watch Later</span>
      </NavLink>
      <NavLink to="/playlist">
        <MdPlaylistPlay />
        <span>Playlist</span>
      </NavLink>
    </nav>
  )
}

export default SideMenu