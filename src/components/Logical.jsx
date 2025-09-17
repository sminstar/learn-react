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

  //1)배열 구조분해할당
  const colors = ["red","blue"];
  // const firstColor = colors[0];
  // const secondColor = colors[1];
  const [firstColor, secondColor] = colors;//변수명 무관 순서 중요

  
  console.log("🚀 ~ Logical ~ firstColor:", firstColor)  
  console.log("🚀 ~ Logical ~ secondColor:", secondColor)

  //2)객체 구조분해할당
  const person = {
    name: "smin",
    mbti: "ABCD"
  }

  const {mbti, name: username} = person //순서 무관 변수명이 키값과 동일해야함
  
  // console.log("🚀 ~ Logical ~ name:", name)
  console.log("🚀 ~ Logical ~ username:", username)//키 value의 변수명 지정 가능
  console.log("🚀 ~ Logical ~ mbti:", mbti)
  
  //Spread Syntax - 배열이나 객체를 개별요소로 분해하거나 결합할때 사용(...a)
  const copyColors = [...colors, "yellow"]//새로 복제, 추가 요소 위치 지정 가능(앞,뒤)
  console.log("🚀 ~ Logical ~ copyColors:", copyColors)

  const copyPerson = {...person, isAttendent: true, mbti:"ASDF"} //항목값 수정 및 항목 추가도 가능
  console.log("🚀 ~ Logical ~ copyPerson:", copyPerson)
  
  //view
  return (
    <div>Logical</div>
  )
}

export default Logical