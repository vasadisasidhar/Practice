import React, { useState } from 'react'

const Clickevent = () => {

    const[number,setNumber]=useState(0)

    const increment=()=>{
        setNumber(number+1)
    }

    const decrement=()=>{
        if(number>0){
            setNumber(number-1)
        }    
    }
  return (
    <div>
    <h1>{number}</h1>  <br></br>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Clickevent
