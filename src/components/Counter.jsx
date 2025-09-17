import React, { useState } from 'react'

const Counter = () => {
  //logic
  // let count = 0;
const [count, setCount] = useState(0);
const MAX = 10;
const MIN = 0;
// console.log("🚀 ~ Counter ~ count:", count);

  const handleIncrease = () => {
    // count++;
    // setCount(count + 1);
    if(count >= MAX) return;
    setCount(num1 => num1+1);
    
    // console.log("🚀 ~ handleIncrease ~ count++;:", count);
  }

  const handleDecrease = () => {
    // count--;
    // setCount(count - 1);
    if(count <= MIN) return;   
    // setCount(num1 => num1-1);
    setCount(num1 => num1<=MIN ? MIN : num1-1);

    // console.log("🚀 ~ handleDecrease ~ count--;:", count);
  }
  //view
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button 
          type="button"
          onClick={handleIncrease}>+1
        </button>
        <button 
          type="button"
          onClick={handleDecrease}>-1
        </button>
      </div>
    </div>
  )
}

export default Counter