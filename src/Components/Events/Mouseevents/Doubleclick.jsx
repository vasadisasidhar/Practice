import React, { useState } from 'react'

const Doubleclick = () => {

    const[message,setMessage]=useState('Hi sasidhar')

    const messagechange=()=>{
        setMessage('Hi Sasidhar, Welcome to Vizianagaram')
    }

  return (
    <div>
      <h1>{message}</h1>
      <button onDoubleClick={messagechange}>Double Click Me</button>
    </div>
  )
}

export default Doubleclick
