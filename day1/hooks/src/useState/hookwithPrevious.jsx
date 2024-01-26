import React, { useState } from 'react';

const HookWithPrevious = () => {
  const initial = 0;
  const [count, setCount] = useState(initial);

  const incrementFive = () => {
    // Use the functional update form to ensure updates are based on the previous state
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
      <button onClick={() => setCount(initial)}>Reset</button>
      <button onClick={incrementFive}>Increment 5</button>

      <p>Counter: {count}</p>
    </div>
  );
};

export default HookWithPrevious;
