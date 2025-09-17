import React from 'react'

const Logical = () => {

  //logic
  //Logical operators
  //1. and
  const user = {
    isLoggedin: true, // 로그인 여부
    role: "admin" //guest, user

  }
  //관리자 페이지 접근 관리
  if(user.isLoggedin && user.role === "admin") {
        console.log("✅관리자페이지 접근 가능!");
  }else{
    console.log("❌관리자페이지 접근 불가능!");
  }

  //사용자 페이지 접근 관리
  if(user.isLoggedin || user.role === "admin") {
        console.log("✅사용자페이지 접근 가능!");
  }else{
    console.log("❌사용자페이지 접근 불가능!");
  }

  if(!user.isLoggedin){
    //로그인이 되지 않을 경우
  }
  // 구조분해 할당 - 배열, 객체에서 각각의 값이나 속성을 분해하여 손숩게 별도의 변수에 담아주는것

  const colors = ["red","blue"];
  // const firstColor = colors[0];
  // const secondColor = colors[1];
  const [firstColor, secondColor] = colors;

  
  console.log("🚀 ~ Logical ~ firstColor:", firstColor)  
  console.log("🚀 ~ Logical ~ secondColor:", secondColor)
  //view
  return (
    <div>Logical</div>
  )
}

export default Logical