import React, { useState } from 'react';

const WithArray = () => {
  // Define state outside the return statement
  const [items, setItems] = useState([]);

  const addItem=()=>{
    setItems([...items, {
        id: items.length,
        value: Math.floor(Math.random()*10)+1
    }])
  }
  return (
    <div>
        <p>Hello this is the useState with the array</p>
      <ul>
        {/* Use curly braces to include JavaScript expressions within JSX */}
        {items.map(item => <li key={item.id}>{item.value}</li>)}
        <button onClick={addItem}>Click here</button>
      </ul>
    </div>
  );
};

export default WithArray;
