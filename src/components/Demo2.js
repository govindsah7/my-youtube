
//useRef is a React Hook that lets you reference a value that’s not needed for rendering.

import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
    const [y,setY] = useState(0);
    let x= 0;
    const ref = useRef(0);
    /**
     * not like => ref = 0
     * ref = {current: 0}
     * object
     */

    console.log("rendering");


    //  let i = {current : 0};

     const i = useRef(null);

    // useEffect(()=>{
    //     i.current = setInterval(()=>{
    //         console.log("hello", Math.random());
    //     },1000);

    //     return () => clearInterval(i.current);
    // },[]);

  return (
    <div className='m-2 p-2 bg-slate-50 border border-black w-96 h-96'>
        <div>
            <button className='bg-green-100 p-2 m-4' onClick={()=>{
                x=x+1;
                console.log("x=" + x);
                }}> Increase X </button>
            <span className='font-bold text-xl '>Let = {x} </span>
        </div>

        <div>
            <button className='bg-green-100 p-2 m-4' onClick={()=>{
                setY(y+1);
                }}> Increase Y </button>
            <span className='font-bold text-xl '>state = {y} </span>
        </div>

        <div>
            <button className='bg-green-100 p-2 m-4' onClick={()=>{
                ref.current = ref.current+1;
                console.log("ref="+ref.current);
                }}> Increase REF </button>
            <span className='font-bold text-xl '>Ref = {ref.current} </span>
        </div>

        {/* <button className='bg-red-900 p-2 m-4 text-white font-bold rounded-lg'
            onClick={()=>{
                clearInterval(i.current);
            }}>
                Stop printing
        </button> */}
        
    </div>
  )
}

export default Demo2;