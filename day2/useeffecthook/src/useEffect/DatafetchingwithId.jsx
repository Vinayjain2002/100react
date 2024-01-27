import React, { useEffect, useState } from 'react'
import 'axios'

const DatafetchingwithId = () => {
    const [posts, setPosts]= useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data); // Set the retrieved data to the state
      })
      .catch(err => {
        console.log("Error occurred while fetching the data");
      });
    },[])

  return (
    <div>
      
    </div>
  )
}

export default DatafetchingwithId
