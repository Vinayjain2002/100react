import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data); // Set the retrieved data to the state
      })
      .catch(err => {
        console.log("Error occurred while fetching the data");
      });
  }, []); // Empty dependency array means this effect runs only once (on mount)

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
