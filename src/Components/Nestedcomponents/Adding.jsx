import React, { useState } from 'react';

function Adding() {
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
    </div>
  );
}

export default Adding;
