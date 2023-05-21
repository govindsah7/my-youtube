/**
 * ---for infinite scroll---
 * onScroll event, make api call
 * keep all video in redux store and keep appending our redux store and keep a offset for redux store
 */


import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../utilis/constants';
import VideoCard, {AdVideoCard} from './videoCard'
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState ([]);
  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items)
  }

  return videos?.length === 0 ? ( <Shimmer />) : (
    <div className='flex flex-wrap'>
      {/* {videos[0] && <AdVideoCard info={videos[0]}/>} */}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
         <VideoCard info={video}/>
        </Link>
         ))}
    </div>
  )
}

export default VideoContainer