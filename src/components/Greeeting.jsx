import React from 'react'

const Greeeting = ({ username }) => {
  return (
    <div className='greeting'>
      <h1>안녕하세요! {username}님</h1>
      <p>오늘도 좋은하루 보내세요!</p>            
    </div>
  )
}

export default Greeeting;