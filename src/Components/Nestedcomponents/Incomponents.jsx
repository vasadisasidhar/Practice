import React, { useState } from 'react';
const Substrate = () => {

    const [num1, setNum1]=useState('')
    const[num2, setNum2]=useState('')
    const[result,setResult]=useState('')

    const number1=(e)=>{
    setNum1(e.target.value)
    }
    const number2=(e)=>{
    setNum2(e.target.value)
    }
    const handleSub=()=>{
    const sub = num1 - num2
    setResult(sub)
    }
  return (
    <div className="App">
        <h1>Sub Two Numbers</h1>
        <div>
            <input type="number" value={num1} onChange={number1} placeholder='Enter first number'/>
            <input type="number" value={num2} onChange={number2} placeholder='Enter second number'/>
            <button onClick={handleSub}>Sub</button>
        </div>
        {<h2>Result: {result}</h2>}
    </div>
  )
}




function Incomponents() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const number1=(e)=>{
    setNum1(e.target.value)
  }

  const number2=(e)=>{
    setNum2(e.target.value)
  }

  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div className="App">
      <h1>Add Two Numbers</h1>
      <div>
        <input type="number"value={num1}onChange={number1} placeholder="Enter first number" />
        
        <input type="number"value={num2} onChange={number2} placeholder="Enter second number"/>
        <button onClick={handleAdd}>Add</button>
      </div>
      {<h2>Result: {result}</h2>}
      <Substrate/>
    </div>
  );
}

export default Incomponents;
