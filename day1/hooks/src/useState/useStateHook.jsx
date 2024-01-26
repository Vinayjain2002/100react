import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const UseStateHook = () => {
  const [count, setCount] = useState(0); // Initial count state

  return (
    <div>
      <p>Going to implement counter using hooks</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <p>Counter: {count}</p>
    </div>
  );
};

// Render the component
const root = createRoot(document.getElementById('root'));
root.render(<UseStateHook />);

export default UseStateHook