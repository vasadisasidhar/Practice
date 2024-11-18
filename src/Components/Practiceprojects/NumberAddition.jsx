import React, { useState } from 'react'

const NumberAddition = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const getnumber1 = (e)=>{
        setNum1(e.target.value)
    }

    const getnumber2 = (e)=>{
        setNum2(e.target.value)
    }

    const add = ()=>{
        const sum = parseFloat(num1) + parseFloat(num2)
        setResult(`Addition of A & B: ${sum}`)
    }
    const sub = ()=>{
        const subs = parseFloat(num1) - parseFloat(num2)
        setResult(`Subtraction of A & B: ${subs}`)
    }

    const mul = ()=>{
        const mulp = parseFloat(num1) * parseFloat(num2)
        setResult(`Multiplication of A & B: ${mulp}`)
    }

  return (
    <div>
     <input type="number" value={num1} onChange={getnumber1} placeholder='Enter the value of A' />
     <input type='number'value={num2} onChange={getnumber2} placeholder='Enter the value of B' />
     <button onClick={add}>Add</button> 
     <button onClick={sub}>Sub</button>
     <button onClick={mul}>Mul</button><br></br><br></br>
     <h2>{result}</h2>
        
    </div>
  )
}

export default NumberAddition
