import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {
    const [count, setCount]=useState(0);

    const incrementCount=()=>{
        setCount(count=> count+1)
    }
    useEffect(()=>{
        const intervalId = setInterval(incrementCount, 1000);
        return()=> clearInterval(intervalId)
    },
    [count]
    )
    // so we have defined a function thar will increment the counter
  return (
    <div>
      {/* here we are going to define a counter that runs repetdly */}
        <h1>Count: {count}</h1>
    </div>
  )
}

export default IntervalHookCounter
