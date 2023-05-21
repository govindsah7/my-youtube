import React, {useMemo, useState} from 'react'
import { findPrime } from '../utilis/helper';

const Demo = () => {
  const [num, setNum] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
//   console.log("render...");

const prime = useMemo(() => findPrime(num), [num]);

// const cachedValue = useMemo(calculateValue, dependencies)
// const prime = findPrime(num);

//   console.log("render"+ prime);
//   here problem is if i will toggle my theme, then it will again and again recalculate prime,
//   to solve we use useMemo

//useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
//useCallback is a React Hook that lets you cache a function definition between re-renders.



  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
        <div>
            <button className='m-10 p-2 bg-green-200 '
            onClick={()=> setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        </div>

        <div>
            <input
                className='border border-black w-80 px-2'
                type='number'
                value={num}
                onChange={(e)=> setNum(e.target.value)}
            />
        </div>
        <div>
            <h1 className='mt-4 font-bold text-xl'>nth prime : {prime} </h1>
        </div>


    </div>
  )
}

export default Demo;