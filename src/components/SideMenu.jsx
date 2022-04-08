import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiOutlineHome, AiOutlineHistory, AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai'
import { MdPlaylistPlay } from 'react-icons/md'

import '../styles/SideMenu.css'

const SideMenu = () => {
  return (
    <nav className="sideMenu">
      <NavLink to="#">
        <AiOutlineHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="#">
        <AiOutlineHistory />
        <span>History</span>
      </NavLink>
      <NavLink to="#">
        <AiOutlineLike />
        <span>Liked Videos</span>
      </NavLink>
      <NavLink to="#">
        <AiOutlineFieldTime />
        <span>Watch Later</span>
      </NavLink>
      <NavLink to="#">
        <MdPlaylistPlay />
        <span>Playlist</span>
      </NavLink>
    </nav>
  )
}

export default SideMenu