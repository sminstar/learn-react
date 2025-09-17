import React, { useState } from 'react'

const Counter = ({step = 5, onClickIncrease}) => {
  //logic
  // let count = 0;
 //const [변수, 함수]
const [count, setCount] = useState(0);
const MAX = 200;
const MIN = -200;
// console.log("🚀 ~ Counter ~ count:", count);

  const handleIncrease = () => {
    // count++;
    // setCount(count + 1);
    onClickIncrease();
    if(count >= MAX) return;
    setCount(num1 => num1+step);    
    // console.log("🚀 ~ handleIncrease ~ count++;:", count);
  }
 
  

  const handleDecrease = () => {
    // count--;
    // setCount(count - 1);
    if(count <= MIN) return;   
    // setCount(num1 => num1-1);
    setCount(num1 => num1<=MIN ? MIN : num1-step);

    // console.log("🚀 ~ handleDecrease ~ count--;:", count);
  }  

  const [startNum, setStartNum] = useState("");

  const handleChange = (e) => {
    setStartNum(e.target.value);
    setCount(e.target.value);
  };
  //view
  return (
    <div>
      <h1>카운터</h1>
      <input
        type="text"
        value={startNum}
        onChange={handleChange}
        placeholder="숫자를 입력하세요" 
        style={{ width:'120px', height: '50px', fontSize: '15px' }}      
      />
      <h2>{count}</h2>      
      <div>
        <button 
          type="button"
          onClick={handleIncrease}>+{step}
        </button>
        <button 
          type="button"
          onClick={handleDecrease}>-{step}
        </button>
      </div>
    </div>
  )
}

export default Counter