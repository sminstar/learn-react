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
  
  const initNumber = () => {
    setCount(0);
  }

  const [startNum, setStartNum] = useState("");

  const handleChange = (e) => {
    setStartNum(e.target.value);
    setCount(parseInt(e.target.value));
  };
  //view
  return (
    <div>
      <h1>카운터</h1>
      <span style={{marginRight:'10px'}}>시작번호 입력:</span>
      <input
        type="number"
        value={startNum}        
        onChange={handleChange}        
        style={{ width:'50px', height: '30px', fontSize: '15px', marginRight: '20px', textAlign: 'center'}}      
      />
      <button 
          type="button"
          onClick={initNumber}>초기화
        </button>
      <h2>현재번호: {count}  증감단위: ({step})</h2>      
      <div>
        <button 
          type="button"
          style={{ width:'50px', height: '30px'}}
          onClick={handleIncrease}>+{step}
        </button>
        <button 
          type="button"
          style={{ width:'50px', height: '30px'}}
          onClick={handleDecrease}>-{step}
        </button>
      </div>
    </div>
  )
}

export default Counter