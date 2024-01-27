import React, { useEffect, useState } from 'react'

const EffectonlyOnce = () => {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition = e =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect caled')
        window.addEventListener('mousemove', logMousePosition)
        //so here we are definning the code that will remove the event Listner same as
        return()=>{
            window.removeEventListener('mousemove', logMousePosition)
            // so we had removed the eventListner
            
        }
    }
    ,[])

    // so useEffect does not depend on anything so it is called only once

  return (
    <div>
      Hooks X- {x} Y-{y}
    </div>
  )
}

export default EffectonlyOnce
