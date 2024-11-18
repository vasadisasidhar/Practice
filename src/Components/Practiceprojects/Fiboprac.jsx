import React, { useState } from 'react'

const Fiboprac = () => {
    const [num, setNum] = useState('')
    const [sequence, setSequence] = useState([])
    
    const numberChange = (e) =>{
        setNum(e.target.value)
    }

    const sequenceGenerator = ()=>{
        if(num==0) return []
        else if(num==1) return[0]
        else if(num==2) return[0,1] 

    const fibo = [0,1]
    for(let i=2;i<num;i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
        return fibo; 
    }
    const generator =()=>{
        setSequence(sequenceGenerator)
    }
  return (
    <div>
       <h2>Fibonacci Sequence Generator</h2>
      <input type='number' value={num} onChange={numberChange} placeholder='Enter number....'/>
      <button onClick={generator}>Generate sequence</button>
      <button >Reset</button>
      <ul>{sequence.map( (item)=>(
        <li>{item}</li>
      ))}</ul>
    </div>
  )
}

export default Fiboprac
