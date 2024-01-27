//so the use Effect hook is generally used when we need to
//  The useEffect hook is used to perform side effects in functional components. 
// Side effects can include data fetching, subscriptions, manually changing the DOM, 
// and more. useEffect is often used for tasks that should occur after the initial render 
// or in response to state or prop changes. Here's a simple example:

//so the functional based components could solve all teh problem in the class based components

import React,{useState, useEffect} from 'react'

const UseEffect = () => {
    const [count,setCount]= useState(0);
    const [name, setName]= useState('vinay');

    useEffect(()=>{
        console.log("updating the title ")
        document.title=`you clicked ${count} times`
    }, [count])
    // [here we specify the props and state on whose value change we need to perform certian action inthe useEffect]
  return (
    <div>
        <input type="text" value={name} onChange={e=> setName(e.target.value)} />
      <button onClick={
        ()=> setCount(count=> count+1)
      }> CLicked {count} times</button>
    </div>
  )
}

export default UseEffect

//so the useEffect runs after every rendered but when we use the class based then we need to define the initial render.
