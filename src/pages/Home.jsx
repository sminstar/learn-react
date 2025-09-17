import React from 'react'
import Card from "../components/Card";
import Counter from "../components/Counter";
import Greeeting from "../components/Greeeting";
import Logical from "../components/Logical";
import Move from '../components/Move';

const Home = () => {

  //logic
  const handleIncrease = () => {
    console.log("handleIncrease()");
  }
  return (
    <div>Home 
      <Move/>    
      <Logical />
      <Greeeting username={"문성민"} />
      <Card />      
      <Counter onClickIncrease={handleIncrease} />

    </div>
    
    // Home, About, Contact
  )
}

export default Home