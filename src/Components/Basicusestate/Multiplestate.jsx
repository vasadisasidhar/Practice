import React, { useState } from 'react'

const Multiplestate = () => {

const[name,setName]=useState('')
const[age,setAge]=useState('')

const handleNameChange=(e)=>{
        setName(e.target.value)
}

const handleAgeChange=(e)=>{
        setAge(e.target.value)
}

const Reset=()=>{
    setName(' ')
    setAge(' ')
}

  return (
    <div>
      <form>
        <lable><h1>Name :
            <input type = "text" value={name} onChange={handleNameChange}></input></h1>
        </lable>
        <lable> <h1>Age  : 
            <input type = "number" value={age} onChange={handleAgeChange}></input></h1>
         </lable>
      </form>
      <h1>Hi {name}, Your age is {age}</h1>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Multiplestate
