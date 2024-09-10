import React, { useState } from 'react'
import First from './First'
import Second from './Second'

const Ternarybasic = () => {

    const [num1, setNum1]=useState('')
    const[num2, setNum2]=useState('')
    const[result,setResult]=useState('')

    const number1=(e)=>{
    setNum1(e.target.value)
    }
    const number2=(e)=>{
    setNum2(e.target.value)
    }
    const handleAdd=()=>{
    const add = parseFloat(num1) + parseFloat(num2)
    setResult(add)
    }
  return (
    <div>
        <h1>Ternary Operator Example</h1>
        <h1>Addition Two Numbers</h1>
        <div>
            <input type="number" value={num1} onChange={number1} placeholder='Enter first number'/>
            <input type="number" value={num2} onChange={number2} placeholder='Enter second number'/>
            <button onClick={handleAdd}>Add</button>
            <h2>Result: {result}</h2>
            {result !== '' && 
                (result === 10 ? <h3>The result is exactly 10.</h3> : result < 10 ? <First/>: <Second/> )
            }
        </div>
    </div>
  )
}

export default Ternarybasic
