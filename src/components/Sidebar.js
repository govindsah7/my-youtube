import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

/**
 * Collapsing sidebar is can happen in any page, so keep it at global space.
 * => so here our global store is redux store
 *
 */

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return false; // early return
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/demo">Demo</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Sports</li>
        <li>News</li>
      </ul>
    </div>
  )
}

export default Sidebar