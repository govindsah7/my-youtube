import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics } = info;
    const {channelTitle, title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-64 h-60 shadow-lg rounded-lg overflow-hidden'>
        <img className='rounded-lg' alt="thumbnails" src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2 truncate'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
};

export const AdVideoCard = ({info}) => {
  return (
    <div className='p-2 m-2 bg-gray-100'>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;