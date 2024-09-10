import React, { useState } from 'react'

const Usestate = () => {

    const [count, setCount]=useState(0);

const Increment = ()=>{
    setCount(count+1)
}
const Decrement = ()=>{
  if(count<=0){
    alert("Count Will not decrease below zero")
  } else{
    setCount(count-1)
  }

}
const Reset=()=>{
    setCount(0)
}

  return (
    <div>
        <h1>Current count: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Usestate
