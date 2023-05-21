import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utilis/appSlice';
import { YOUTUBE_SEARCH_API } from '../utilis/constants';
import { cacheResults } from '../utilis/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store )=> store.search);
  const dispatch = useDispatch();
  /**
   * searchQuery = {
   *   "iphone" = ["iphone11", "iphone 12"]
   * }
   * searchQuery = iphone
   */

  useEffect(()=> {
    //make an api call after every key press
    //but if the difference between 2 button stroke is less than 200ms, then decline the api call
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
        }
      }, 200);

    return () => {
      clearTimeout(timer);
    };

  }, [searchQuery]);
  // debouncing

  /**
   *  key - i
   *  - render the component
   *  - useEffect();
   *  - start timer => make api calll after 200 ms
   *
   *  key - ip
   *  - destroy the component (useEffect return method)
   *  - re-render the component
   *  - useEffect()
   *  - start timer => make api call after 200 ms
   *
   */

  const getSearchSuggestions = async () => {
    // console.log("api call" + searchQuery);
    const data = await fetch( YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    //update in my cache
    dispatch(cacheResults({
      [searchQuery]: json[1],
    })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg '>
      <div className='flex col-span-1'>
      <img
      onClick={()=>toggleMenuHandler()}
      className='h-9 cursor-pointer' alt='menu' src='https://img.myloview.com/stickers/hamburger-menu-icon-menu-icon-in-trendy-flat-style-isolated-on-white-background-for-your-web-site-design-app-logo-ui-vector-illustration-eps10-400-206330521.jpg'/>

      <a href='/'>
      <img className='h-9 mx-2' alt='logo' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'/>
      </a>
      </div>

      <div className='col-span-10 px-10'>
        <div>
        <input className='px-7 w-1/2 border border-gray-400 p-2 rounded-l-full'
        type='text'
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className='border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100'>🔍</button>
      </div>
      {showSuggestions && (
      <div className='absolute bg-white py-2 px-2 w-[26.5rem] shadow-lg rounded-lg border border-gray-100'>
        <ul>
          {
          suggestions.map((s)=>
            <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍{s}</li>
          )}
        </ul>
      </div>
      )}
      </div>

      <div className='col-span-1'>
        <img className='h-9' alt='user' src='https://cdn-icons-png.flaticon.com/512/709/709722.png'/>
      </div>

    </div>
  )
}

export default Head